<template>
  <div class="container text-start mt-5">
    <h6 class="fw-bold">On Going Reservation</h6>

    <div
      class="card p-3 mt-3 border-0"
      style="background-color: #ffffff; border-radius: 10px"
    >
      <div class="row">
        <OngoingReservation />
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-4 mb-3">
        <div class="card h-100 p-3 border-0" style="border-radius: 10px">
          <h6 class="fw-bold">Income for February</h6>
          <div class="row m-0">
            <div class="col-8 ps-0 pe-0">
              <div
                class="card border-0 p-3"
                style="background-color: #6525ff; border-radius: 10px"
              >
                <h5 class="text-light mb-0">$14,032.56</h5>
              </div>
            </div>
            <div class="col-4 pe-0">
              <div
                class="d-flex justify-content-center align-items-center h-100"
                style="background-color: #c6ffa5; border-radius: 10px"
              >
                <h6 class="mb-0 text-center fw-semibold">+5.63%</h6>
              </div>
            </div>
          </div>

          <h6 class="fw-bold mt-4">Revenu from Turo</h6>
          <div
            class="card border-0 p-3"
            style="background-color: #2c2c2c; border-radius: 10px"
          >
            <div
              class="d-flex align-items-center justify-content-between text-light h5 mb-0"
            >
              $14,032.56
              <button
                class="btn btn-primary border-0 row m-0 d-flex align-items-center p-0"
                style="
                  background-color: #6525ff;
                  border-radius: 10px;
                  width: 40px;
                  height: 40px;
                "
              >
                <span class="material-icons p-0">arrow_right</span>
              </button>
            </div>
          </div>

          <h6 class="text-muted mt-4">Best Performing Car</h6>
          <BestPerformingCar />

          <div class="row m-0">
            <div class="col-4 p-0">
              <span class="text-muted small">Invested Value</span><br />
              <span class="fw-bold">$38,600</span>
            </div>
            <div class="col-4 p-0">
              <span class="text-muted small">Recovered Value</span><br />
              <span class="fw-bold">$8,638</span>
            </div>
            <div class="col-4">
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3">
        <div class="card h-100 p-3 border-0" style="border-radius: 10px">
          <div class="cus-small-tab">
          <ul class="nav nav-pills nav-fill mb-2">
            <li class="nav-item">
              <a class="nav-link active" href="#">On Site</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Turo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Website</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tolls</a>
            </li>
          </ul>
          </div>


          <CusLineChart :chartData="chartDataOne"  />

          <div class="row m-0 mt-3">
            <div class="col-6 p-0 mb-2">
              <span class="text-muted small">High</span><br />
              <span class="fw-bold">$38,600</span>
            </div>
            <div class="col-6 p-0 mb-2">
              <span class="text-muted small">Prev Close (Avr 28 Days)</span
              ><br />
              <span class="fw-bold">$8,638</span>
            </div>
            <div class="col-6 p-0 mb-2">
              <span class="text-muted small">Low</span><br />
              <span class="fw-bold">$8,638</span>
            </div>
            <div class="col-6 p-0 mb-2">
              <span class="text-muted small">Open</span><br />
              <span class="fw-bold">$8,638</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3">
        <div class="card h-100 p-3 border-0" style="border-radius: 10px">
          <h6 class="fw-bold">Snapshot</h6>
          <div class="row m-0">
            <div class="col-6 p-0 mb-2">
              <span class="text-muted small">Prev Close</span><br />
              <span class="fw-bold">$38,600</span>
            </div>
            <div class="col-6 p-0 mb-2">
              <span class="text-muted small">Open</span><br />
              <span class="fw-bold">$8,638</span>
            </div>
          </div>
          <hr />
          <div class="row m-0">
            <div class="col-6 p-0">
              <span class="fw-bold">11,999.87</span><br />
              <span class="text-muted small">Day Low</span>
            </div>
            <div class="col-6 p-0 text-end">
              <span class="fw-bold">12,248.15</span><br />
              <span class="text-muted small">Day High</span>
            </div>
          </div>
          <div class="progress mt-2" style="height: 6px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%; background-color: #f2aafa; height: 6px"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span class="fw-semibold mt-2">12.166.60</span>

          <hr />
          <div class="row m-0">
            <div class="col-6 p-0 mb-2">
              <span class="fw-bold">11,999.87</span><br />
              <span class="text-muted small">52 Week Low</span>
            </div>
            <div class="col-6 p-0 mb-2 text-end">
              <span class="fw-bold">12,248.15</span><br />
              <span class="text-muted small">52 Week High</span>
            </div>
          </div>
          <div class="progress" style="height: 6px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%; background-color: #f2aafa; height: 6px"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span class="fw-semibold mt-2">12.166.60</span>

          <hr />
          <div class="row m-0">
            <div class="col-md-6 p-0 mb-2">
              <span class="text-muted small">Previouse Report Time</span><br />
              <span class="fw-bold">05:16 PM</span>
            </div>
            <div class="col-md-6 p-0 mb-2">
              <span class="text-muted small">Previouse Report Date</span><br />
              <span class="fw-bold">01/27/23</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-8 mb-3">
        <div class="card h-100 p-3 border-0" style="border-radius: 10px">
          <h6 class="fw-bold">Rental Analytics</h6>
          <CusLineChart :chartData="chartDataTwo"  />
        </div>
      </div>

      <div class="col-md-4 mb-3">
        <div class="card h-100 p-3 border-0" style="border-radius: 10px">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="fw-semibold mb-0">Top Performing Car</h6>
            <button
              class="btn h5 text-light fw-bold"
              style="background-color: #6525ff"
            >
              +
            </button>
          </div>
          
          <TopPerformingCar />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import CusLineChart from "@/components/charts/CusLineChart.vue";
import OngoingReservation from "@/components/cards/OngoingReservationCard.vue";
import BestPerformingCar from "@/components/cards/BestPerformingCar.vue";
import TopPerformingCar from "@/components/cards/TopPerformingCar.vue";

export default {
  name: "HomeView",
  components: {
    CusLineChart,
    OngoingReservation,
    BestPerformingCar,
    TopPerformingCar,
  },
  data() {
    return {
      chartDataOne: [
        { x: "10 am", y: 11550 },
        { x: "11 am", y: 11600 },
        { x: "12 am", y: 12600 },
      ],
      chartDataTwo: [
        { x: "A", y: 6000 },
        { x: "B", y: 9000 },
        { x: "C", y: 15000 },
        { x: "D", y: 12000 },
      ],
    };
  },
};
</script>
