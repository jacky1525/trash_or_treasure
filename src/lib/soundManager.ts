"use client";

class SoundManager {
    private static instance: SoundManager;
    private sounds: Map<string, HTMLAudioElement> = new Map();
    private activeInstances: Map<string, Set<HTMLAudioElement>> = new Map();
    private isMuted: boolean = false;
    private globalVolume: number = 0.5;

    private constructor() {
        if (typeof window !== "undefined") {
            this.isMuted = localStorage.getItem("sound_muted") === "true";
            this.globalVolume = parseFloat(localStorage.getItem("sound_volume") || "0.5");
        }
    }

    public static getInstance(): SoundManager {
        if (!SoundManager.instance) {
            SoundManager.instance = new SoundManager();
        }
        return SoundManager.instance;
    }

    public loadSound(name: string, path: string) {
        if (typeof window === "undefined") return;
        const audio = new Audio(path);
        audio.preload = "auto";
        this.sounds.set(name, audio);
        this.activeInstances.set(name, new Set());
    }

    public play(name: string, options?: { volume?: number; pitch?: number; loop?: boolean }) {
        if (this.isMuted || typeof window === "undefined") return;

        const audio = this.sounds.get(name);
        if (audio) {
            const soundEffect = audio.cloneNode() as HTMLAudioElement;
            soundEffect.volume = (options?.volume ?? 1) * this.globalVolume;

            // Pitch adjustment (playbackRate)
            if (options?.pitch) {
                soundEffect.playbackRate = options.pitch;
            }

            if (options?.loop) {
                soundEffect.loop = true;
            }

            // Track instance
            const instances = this.activeInstances.get(name);
            if (instances) {
                instances.add(soundEffect);
                soundEffect.onended = () => instances.delete(soundEffect);
            }

            soundEffect.play().catch(e => console.error("Audio play failed:", e));
            return soundEffect;
        }
    }

    public stop(name: string) {
        const instances = this.activeInstances.get(name);
        if (instances) {
            instances.forEach(instance => {
                instance.pause();
                instance.currentTime = 0;
            });
            instances.clear();
        }
    }

    public setMute(muted: boolean) {
        this.isMuted = muted;
        localStorage.setItem("sound_muted", muted.toString());
    }

    public setVolume(volume: number) {
        this.globalVolume = volume;
        localStorage.setItem("sound_volume", volume.toString());
    }

    public getMute() {
        return this.isMuted;
    }
}

export const soundManager = SoundManager.getInstance();
