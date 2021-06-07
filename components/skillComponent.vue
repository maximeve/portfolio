<template>
  <div class="w-full static pb-36">
    <div data-aos="fade-left"
     data-aos-offset="500"
     data-aos-duration="500" class="w-full justify-end">
      <h2 class="w-full font-rubik bg-c-pink text-white p-5 rounded-xl absolute right-0 shadow-lg sm:w-1/3">SKILLS</h2>
    </div>
    <div class="w-full flex flex-wrap pt-36">
      <div data-aos="zoom-out" class="drag w-full md:w-1/2">
        <div>
          <div
            class="text-white w-full font-rubik text-3xl border-b-2 border-white pb-5 mb-10"
          >MY INTERESTS</div>
          <!-- Backlog draggable component. Pass skillsWanted to list prop -->
          <draggable class="list-group kanban-column" :list="skillsWanted" group="tasks">
            <div
              class="font-karla h-6 flex align-middle text-center text-white rounded-full px-3 m-1 cursor-pointer hover:bg-c-purple transition delay-75"
              v-for="element in skillsWanted"
              :key="element.name"
            >{{ element.name }}</div>
          </draggable>
        </div>
      </div>
      <div data-aos="zoom-out" class="drag w-full mt-10 sm:w-1/2 sm:mt-0">
        <div>
          <div
            class="text-white w-full font-rubik text-3xl border-b-2 border-white pb-5 mb-10"
          >YOU ARE LOOKING FOR</div>
          <!-- In Progress draggable component. Pass skillsPocket to list prop -->
          <draggable
            @change="pushRating"
            class="list-group kanban-column"
            :list="skillsPocket"
            group="tasks"
          >
            <div
              class="font-karla h-6 flex align-middle text-center text-white rounded-full px-3 m-1 cursor-pointer hover:bg-c-purple transition delay-75"
              v-for="element in skillsPocket"
              :key="element.name"
            >{{ element.name }}</div>
          </draggable>
        </div>
      </div>
    </div>
    <div data-aos="zoom-out" id="chart">
      <apexchart class="w-full sm:w-1/2"
        v-if="mounted"
        type="polarArea"
        width="100%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
//import draggable
import draggable from "vuedraggable";
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    //import draggable as a component
    draggable,
    apexchart: VueApexCharts
  },
  mounted() {
    this.mounted = true;
  },
  data() {
    return {
      mounted: false,
      // 4 arrays to keep track of our 4 statuses
      skillsWanted: [
        { name: "Illustrator", rating: 60 },
        { name: "Photoshop", rating: 70 },
        { name: "Adobe After Effects", rating: 40 },
        { name: "HTML5", rating: 90 },
        { name: "CSS3", rating: 90 },
        { name: "VueJS", rating: 80 },
        { name: "Javascript", rating: 70 },
        { name: "NuxtJS", rating: 80 }
      ],
      skillsPocket: [],
      skillRating: [],
      skillName: [],
      series: [33, 33, 33],
      chartOptions: {
        chart: {
          width: '100%',
          type: "polarArea"
        },
        labels: ["Drag", "preferred", "skills"],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: "bottom",
          labels: {
            colors: ["#FFFFFF"]
          }
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            }
          }
        },
        colors: [
          "#003f5c",
          "#374c80",
          "#7a5195",
          "#bc5090",
          "#ef5675",
          "#ff764a",
          "#ffa600"
        ]
      }
    };
  },
  methods: {
    pushRating() {
      var labelsArray = [];
      this.series = [];
      for (var i = 0; i < this.skillsPocket.length; i++) {
        this.series.push(this.skillsPocket[i].rating);
        labelsArray.push(this.skillsPocket[i].name);
      }
      this.chartOptions = {
        chart: {
          width: '100%',
          type: "polarArea"
        },
        labels: labelsArray,
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: "bottom",
          labels: {
            colors: ["#FFFFFF"]
          }
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            }
          }
        },
        colors: [
          "#003f5c",
          "#374c80",
          "#7a5195",
          "#bc5090",
          "#ef5675",
          "#ff764a",
          "#ffa600"
        ]
      };
    }
  }
};
</script>
<style>
/* GLOBAL */
/* light stylings for the kanban columns */
.drag {
  min-height: 200px;
  padding: 10px;
  border-radius: 20px;
  height: auto;
  -webkit-box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.28);
  box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.28);
  transition: all 0.2s ease-in-out;
}
.kanban-column {
  min-width: 100px;
  min-height: 100px;
}
.list-group-item {
  height: 20px;
  margin: 5px;
}
.list-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#chart {
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 870px) {
  #chart {
    margin-top: 60px;
  }
}
</style>