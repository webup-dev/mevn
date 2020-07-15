import {createApp} from "vue";

createApp({
    components: {
        "movie-list": {
            template: `
                <div id="movie-list">
                    Movie List
                </div>
            `
        },
        "movie-filter": {
            template: `
              <div id="movie-filter">
                  Movie filter
              </div>
            `
        }
    }
}).mount("#app");
