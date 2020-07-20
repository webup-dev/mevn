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
                    {title: "Pulp Fiction"},
                    {title: "Home Alone"},
                    {title: "Austin Powers"}
                ]
            })
        },
        "movie-filter": {
            template: `
                <div id="movie-filter">
                    <h2>Filter Results</h2>
                    <div class="filter-group">
                        <check-filter
                                v-for="genre in genres"
                                v-bind:title="genre"
                                v-on:check-filter="checkFilter"
                        ></check-filter>
                    </div>
                </div>
            `,
            data: () => ({
                genres
            }),
            components: {
                "check-filter": {
                    props: {
                        title: String
                    },
                    emits: ["check-filter"],
                    template: `
                        <div
                                v-on:click="checkFilter"
                                v-bind:class="{ 'check-filter': true, active: checked }"
                        >
                            <span class="checkbox"></span>
                            <span class="check-filter-title">{{ title }}</span>
                        </div>
                    `,
                    data: () => ({
                        checked: false
                    }),
                    methods: {
                        checkFilter() {
                            this.checked = !this.checked;
                            this.$emit("check-filter", this.checked, this.title);
                        }
                    }
                }
            },
            methods: {
                checkFilter() {
                    console.log("check-filter received");
                }
            }
        }
    }
}).mount("#app");
