/**
 * Procedural Web Audio synthesizer for combat, UI, and live calculus mechanism resonance.
 */

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted = false;
  private resonanceOsc: OscillatorNode | null = null;
  private resonanceGain: GainNode | null = null;

  public setMuted(muted: boolean): void {
    this.muted = muted;
    if (muted) {
      this.stopMechanismResonance();
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public ensureInitialized(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        void this.ctx.resume().catch(() => {});
      }
      return;
    }
    try {
      const AudioCtx =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch {
      this.ctx = null;
    }
  }

  private playTone(opts: {
    type: OscillatorType;
    startFreq: number;
    endFreq: number;
    duration: number;
    gainPeak: number;
    delay?: number;
    pan?: number;
  }): void {
    if (this.muted) return;
    this.ensureInitialized();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime + (opts.delay ?? 0);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = opts.type;
      osc.frequency.setValueAtTime(opts.startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.endFreq), now + opts.duration);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(opts.gainPeak, now + Math.min(0.02, opts.duration * 0.25));
      gain.gain.exponentialRampToValueAtTime(0.0001, now + opts.duration);

      osc.connect(gain);
      if(opts.pan!==undefined) {
        const panner=this.ctx.createStereoPanner();panner.pan.value=Math.max(-1,Math.min(1,opts.pan));
        gain.connect(panner);panner.connect(this.ctx.destination);
        osc.onended=()=>{osc.disconnect();gain.disconnect();panner.disconnect();};
      } else { gain.connect(this.ctx.destination);osc.onended=()=>{osc.disconnect();gain.disconnect();}; }
      osc.start(now);
      osc.stop(now + opts.duration + 0.02);
    } catch {
      // Ignore audio scheduling errors in restricted contexts
    }
  }

  public playSwordSwing(): void {
    this.playTone({ type: 'sawtooth', startFreq: 380, endFreq: 110, duration: 0.14, gainPeak: 0.14 });
  }

  public playSwordHit(pan=0): void {
    this.playTone({ type: 'square', startFreq: 190, endFreq: 52, duration: 0.15, gainPeak: 0.15,pan });
  }

  public playShieldDeflect(): void {
    this.playTone({ type: 'triangle', startFreq: 640, endFreq: 240, duration: 0.18, gainPeak: 0.16 });
  }

  public playDodge(): void {
    this.playTone({ type: 'sine', startFreq: 280, endFreq: 140, duration: 0.16, gainPeak: 0.12 });
  }

  public playPlayerHurt(): void {
    this.playTone({ type: 'sawtooth', startFreq: 200, endFreq: 75, duration: 0.26, gainPeak: 0.22 });
  }

  public playEnemyTelegraph(pan=0,distance=0): void {
    this.playTone({ type: 'triangle', startFreq: 320, endFreq: 540, duration: 0.22, gainPeak: 0.12/(1+distance*.12),pan });
  }

  public playTrapTurn(pan:number,distance:number):void {
    this.playTone({type:'triangle',startFreq:90,endFreq:160,duration:.22,gainPeak:.055/(1+distance*.15),pan});
  }

  public playPotion(): void {
    [420, 540, 680, 860].forEach((f, i) => {
      this.playTone({ type: 'sine', startFreq: f, endFreq: f * 1.04, duration: 0.16, gainPeak: 0.14, delay: i * 0.06 });
    });
  }

  public playMechanismSolved(): void {
    [440, 554.37, 659.25, 880].forEach((f, i) => {
      this.playTone({ type: 'triangle', startFreq: f, endFreq: f, duration: 0.32, gainPeak: 0.16, delay: i * 0.08 });
    });
  }

  public playSealCollected(): void {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      this.playTone({ type: 'triangle', startFreq: f, endFreq: f, duration: 0.45, gainPeak: 0.18, delay: i * 0.1 });
    });
  }

  public playUiClick(): void {
    this.playTone({ type: 'sine', startFreq: 520, endFreq: 620, duration: 0.05, gainPeak: 0.08 });
  }

  /**
   * Continuous live harmonic tone communicating closeness to E'(x)=0 or ||grad E||=0.
   */
  public updateMechanismResonance(closeness: number, inTolerance: boolean): void {
    if (this.muted) return;
    this.ensureInitialized();
    if (!this.ctx) return;

    try {
      if (!this.resonanceOsc || !this.resonanceGain) {
        this.resonanceOsc = this.ctx.createOscillator();
        this.resonanceGain = this.ctx.createGain();
        this.resonanceOsc.type = 'sine';
        this.resonanceGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
        this.resonanceOsc.connect(this.resonanceGain);
        this.resonanceGain.connect(this.ctx.destination);
        this.resonanceOsc.start();
      }
      const now = this.ctx.currentTime;
      const targetFreq = inTolerance ? 440 : 180 + closeness * 250;
      const targetGain = inTolerance ? 0.09 : 0.025 + closeness * 0.04;
      this.resonanceOsc.frequency.setTargetAtTime(targetFreq, now, 0.05);
      this.resonanceGain.gain.setTargetAtTime(targetGain, now, 0.05);
    } catch {
      // Ignore
    }
  }

  public stopMechanismResonance(): void {
    if (this.resonanceGain && this.ctx) {
      try {
        this.resonanceGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.03);
      } catch {
        // Ignore
      }
    }
    if (this.resonanceOsc) {
      const osc = this.resonanceOsc;
      this.resonanceOsc = null;
      this.resonanceGain = null;
      setTimeout(() => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // Ignore
        }
      }, 90);
    }
  }
}

