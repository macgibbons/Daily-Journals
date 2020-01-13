const contentTarget = document.querySelector(".filters")

const MoodFilter = () => {
    contentTarget.innerHTML =
     `
    <div class="moodFilter">
    <div class="filterLabel">Filter By Moods</div>
    <input type="radio" id="happy" name="filter" value="Happy">
    <label for="happy">Happy</label>
    <input type="radio" id="neutral" name="filter" value="Neutral">
    <label for="neutral">Neutral</label>
    <input type="radio" id="Sad" name="filter" value="Sad">
    <label for="Sad">Sad</label>
    </div>
        `
        
}

export default MoodFilter