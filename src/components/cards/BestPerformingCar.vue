<template>

  <div v-for="(element, index) in cardsArr" :key="index" class="card border-0 p-3">
    <div
      class="d-flex align-items-center justify-content-between h6 mb-0"
    >
      <div class="d-flex justify-content-start align-items-center">
        <img
          :src="require(`@/assets/images/${element.icon}`)"
          alt="Icon"
          style="width: 30px; height: 30px"
        />
        <span class="text-start ms-2 fw-bold">{{ element.title }}</span>
      </div>
      <div class="text-end small">
        <span>START DATE</span><br />
        <span class="text-success">{{ element.date }}</span>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  name: "BestPerformingCar",
  data() {
    return {
      cardsArr: {
        1: {
          title: "Tesla X3",
          date: "25/03/2020",
          icon: "tesla_logo.png",
        },
        2: {
          title: "Tesla X3",
          date: "25/03/2020",
          icon: "tesla_logo.png",
        },
      },
    };
  },
};
</script>
