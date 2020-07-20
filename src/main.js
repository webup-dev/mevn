import "@/assets/style.scss";
import genres from "./util/genres";
import {createApp} from "vue";

createApp({
    components: {
        "movie-list": {
            template: `
                <div id="movie-list">
                    <div v-for="movie in movies">{{ movie.title }}</div>
                </div>
            `,
            data: () => ({
                movies: [
                    { title: "Pulp Fiction" },
                    { title: "Home Alone" },
                    { title: "Austin Powers" }
                ]
            })
        },
        "movie-filter": {
            template: `
              <div id="movie-filter">
                  <h2>Filter Results</h2>
                  <check-filter v-for="genre in genres"></check-filter>
              </div>
            `,
            data: () => ({
                genres
            }),
            components: {
                "check-filter": {
                    template: `<div>Check filter</div>`
                }
            }
        }
    }
}).mount("#app");
