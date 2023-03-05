<template>
  <div v-for="(element, index) in cardsArr" :key="index" class="card border-0">
    <div class="d-flex align-items-center justify-content-between h6 mb-0">
      <div class="d-flex justify-content-start align-items-center">
        <img
          :src="require(`@/assets/images/${element.icon}`)"
          alt="Icon"
          style="width: 30px; height: 30px"
        />
        <div class="text-start ms-2">
          <span class="fw-bold">{{ element.title }}</span
          ><br />
          <span class="text-muted small">{{ element.subTitle }}</span>
        </div>
      </div>
      <div class="text-end small">
        <span>{{ element.value }}</span
        ><br />
        <span class="text-success">{{ element.percentage }}</span>
      </div>
    </div>
    <hr />
  </div>
</template>


<script>
export default {
  name: "TopPerformingCar",
  data() {
    return {
      cardsArr: {
        1: {
          title: "Amazon.com, Inc.",
          subTitle: "AMZN",
          value: "$102.24",
          percentage: "+3.02",
          icon: "amzn_logo.png",
        },
        2: {
          title: "Amazon.com, Inc.",
          subTitle: "AMZN",
          value: "$102.24",
          percentage: "+3.02",
          icon: "amzn_logo.png",
        },
      },
    };
  },
};
</script>
