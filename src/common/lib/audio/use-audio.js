import { useState } from 'react';

let audioContext = null;
let gainNode = null;
const buffers = {};
const sources = [];

export const useAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const initAudioContext = () => {
        if (!audioContext) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            audioContext = new AudioContextClass();
            gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
        }

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    };

    const loadBuffer = async (url) => {
        if (buffers[url]) {
            return buffers[url];
        }

        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            buffers[url] = audioBuffer;
            return audioBuffer;
        } catch (error) {
            console.error(`Ошибка загрузки звука по пути ${url}:`, error);
            return null;
        }
    };

    const play = async ({ url, loop = false }) => {
        initAudioContext();

        const buffer = await loadBuffer(url);
        if (!buffer) {
            return;
        }

        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = loop;
        source.connect(gainNode);
        source.start(0);
        sources.push(source);
        setIsPlaying(true);

        source.onended = () => {
            if (!loop) {
                setIsPlaying(false);
                const index = sources.indexOf(source);
                if (index > -1) {
                    sources.splice(index, 1);
                }
            }
        };
    };

    const stop = () => {
        sources.forEach((source) => {
            source.stop();
            source.disconnect();
        });
        sources.length = 0;
        setIsPlaying(false);
    };

    return {
        play,
        stop,
        isPlaying,
    };
};