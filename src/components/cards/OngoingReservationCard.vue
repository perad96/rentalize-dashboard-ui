<template>
  <div v-for="(element, index) in cardsArr" :key="index" class="col-md-3 mb-3">
    <div
      class="card pt-2 pb-2 border-0"
      :style="{
        backgroundColor: element.backgroundColor,
        borderRadius: '10px',
      }"
    >
      <div class="row m-0">
        <h6 class="fw-bold mb-0">{{ element.title }}</h6>
        <span class="text-muted small">{{ element.time }}</span>
      </div>
      <div class="row m-0 mt-3">
        <div class="col-md-4 m-0">
          <img
            class="w-100"
            :src="require(`@/assets/images/${element.icon}`)"
            alt="Icon"
          />
        </div>
        <div class="col-md-8 m-0">
          <h6>{{ element.valueTitle }}</h6>
          <h4 class="fw-semibold">{{ element.value }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "OngoingReservation",
  data() {
    return {
      cardsArr: {
        1: {
          title: "Kyle Morin",
          time: "Tomorrow 12:00 pm",
          icon: "car.png",
          valueTitle: "Total Ride Value",
          value: "$203.65",
          backgroundColor: "#a5f7e1",
        },
        2: {
          title: "Kyle Morin",
          time: "Tomorrow 12:00 pm",
          icon: "car.png",
          valueTitle: "Total Ride Value",
          value: "$203.65",
          backgroundColor: "#B79BFF",
        },
        3: {
          title: "Kyle Morin",
          time: "Tomorrow 12:00 pm",
          icon: "car.png",
          valueTitle: "Total Ride Value",
          value: "$203.65",
          backgroundColor: "#FEE5A5",
        },
        4: {
          title: "Kyle Morin",
          time: "Tomorrow 12:00 pm",
          icon: "car.png",
          valueTitle: "Total Ride Value",
          value: "$203.65",
          backgroundColor: "#C7FFA4",
        },
      },
    };
  },
};
</script>
