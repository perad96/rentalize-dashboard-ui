<template>
  <div class="div-cus-nav pb-3">
    <nav class="navbar navbar-expand-lg navbar-light mb-3">
      <div class="container-fluid">
        <a class="navbar-brand me-5" href="#">
          <img
            :src="require('@/assets/logo.png')"
            alt="Logo"
            style="width: 200px"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse pt-1" id="navbarSupportedContent">
          <form class="d-flex col-md-8">
            <input
              class="form-control border-0 me-2"
              type="search"
              placeholder="Search for stock and more"
              aria-label="Search"
              style="background-color: #f7f7f9"
            />
          </form>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="material-icons-sharp">notifications_none</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <div class="d-flex align-items-center">
                  <span class="me-2">Hello Matt,</span>
                  <img
                    :src="require('@/assets/images/user-1.png')"
                    alt="Logo"
                    class="rounded-circle"
                    style="width: 30px; padding: 0"
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <ul id="upperNavBottomUl" class="nav nav-pills nav-fill">
        <li v-for="(link, index) in navLinks" :key="index" class="nav-item">
          <router-link
            :to="link.path"
            class="nav-link"
            :class="{ active: isActive(link.path) }"
          >
            <span class="material-icons me-1">{{ link.icon }}</span>
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpperNav",
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
  data() {
    return {
      navLinks: {
        1: {
          isActive: true,
          label: "Dashboard",
          icon: "dashboard",
          path: "/",
        },
        2: {
          isActive: false,
          label: "Reservation",
          icon: "compare_arrows",
          path: "/about",
        },
        3: {
          isActive: false,
          label: "Cars & Inventory",
          icon: "account_balance",
          path: "#",
        },
        4: {
          isActive: false,
          label: "Maps & Tracking",
          icon: "account_tree",
          path: "#",
        },
        5: {
          isActive: false,
          label: "Analytics",
          icon: "candlestick_chart",
          path: "#",
        },
        6: {
          isActive: false,
          label: "Account",
          icon: "account_balance_wallet",
          path: "#",
        },
        7: {
          isActive: false,
          label: "Settings",
          icon: "settings",
          path: "#",
        },
      },
    };
  },
};
</script>

<style>
</style>
