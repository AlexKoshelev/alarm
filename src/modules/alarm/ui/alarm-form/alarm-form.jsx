import PropTypes from "prop-types";

export const AlarmForm =
    ({
         bottomContent,
         time,
         setTime,
         selectedDays,
         setSelectedDays,
         selectedSoundIndex,
         setSelectedSoundIndex,
     }) => (
        <div className="ms w-96 mx-auto p-2 m-8">
            <section className="flex-wrap justify-center p-4">
                {/*<TimeSelector time={time} setTime={setTime}/>*/}
                {/*<WeekDaysSelect*/}
                {/*    selectedDays={selectedDays}*/}
                {/*    setSelectedDays={setSelectedDays}*/}
                {/*/>*/}
                {/*<SoundSelect*/}
                {/*    selectedSoundIndex={selectedSoundIndex}*/}
                {/*    setSelectedSoundIndex={setSelectedSoundIndex}*/}
                {/*/>*/}
                <div className="flex justify-around">{bottomContent}</div>
            </section>
        </div>
    )


AlarmForm.propTypes = {
    bottomContent: PropTypes.node.isRequired,
    triggerTimeMinutes: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired, // названия другие
    selectedDays: PropTypes.array.isRequired,
    setSelectedDays: PropTypes.func.isRequired,
    selectedSoundIndex: PropTypes.number.isRequired,
    setSelectedSoundIndex: PropTypes.func.isRequired,
};
