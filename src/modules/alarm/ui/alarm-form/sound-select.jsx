import React, { useState, useEffect } from 'react';
import { soundList } from '@/modules/alarm/model/sound-list.js';
import useSound from 'use-sound';

export const SoundSelect = () => {
    const [selectedSoundId, setSelectedSoundId] = useState('');
    const [play, { stop }] = useSound(soundList[selectedSoundId] ?? null, { loop: true }); // Инициализируем без URL

    useEffect(() => {
        if (selectedSoundId) {
            const selectedSound = soundList.find(sound => sound.id === selectedSoundId);
            if (selectedSound) {
                play();
            }
        } else {
            stop();
        }

        return () => {
            stop();
        };
    }, [selectedSoundId, play, stop]);

    const handleChange = (e) => {
        const selectedId = e.target.value;
        setSelectedSoundId(selectedId);
    };

    return (
        <div>
            <label htmlFor="sound-select">Выберите звук: </label>
            <select id="sound-select" value={selectedSoundId} onChange={handleChange}>
                <option value="">--Выберите звук--</option>
                {soundList.map(sound => (
                    <option key={sound.id} value={sound.id}>
                        {sound.name}
                    </option>
                ))}
            </select>

            {selectedSoundId && (
                <div style={{ marginTop: '10px' }}>
                    <button onClick={() => setSelectedSoundId('')}>
                        Остановить
                    </button>
                </div>
            )}
        </div>
    );
};
