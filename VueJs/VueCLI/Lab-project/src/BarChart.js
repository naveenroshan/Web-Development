import {
    Bar,
    mixins
} from "vue-chartjs";
const {
    reactiveProp
} = mixins;

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ["options"],
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        let options = {
            scales: {
                y: {
                    min: 0
                }
            }
        };
        this.renderChart(this.chartData, options);
    }
};