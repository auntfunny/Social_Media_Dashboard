export const dashboardData = {
  header: {
    title: "Social Media Dashboard",
    totalFollowers: 23004
  },

  // Tarjetas principales de redes sociales
  socialCards: [
    {
      platform: "facebook",
      icon: "/images/icon-facebook.svg",
      username: "@nathanf",
      count: 1987,
      label: "Followers",
      change: {
        value: 12,
        isPositive: true
      },
      accentColor: "hsl(208, 92%, 53%)"
    },
    {
      platform: "twitter",
      icon: "/images/icon-twitter.svg",
      username: "@nathanf",
      count: 1044,
      label: "Followers",
      change: {
        value: 99,
        isPositive: true
      },
      accentColor: "hsl(203, 89%, 53%)"
    },
    {
      platform: "instagram",
      icon: "/images/icon-instagram.svg",
      username: "@realnathanf",
      count: "11k",
      label: "Followers",
      change: {
        value: 1099,
        isPositive: true
      },
      accentColor: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
    },
    {
      platform: "youtube",
      icon: "/images/icon-youtube.svg",
      username: "Nathan F.",
      count: 8239,
      label: "Subscribers",
      change: {
        value: 144,
        isPositive: false
      },
      accentColor: "hsl(348, 97%, 39%)"
    }
  ],

  // Tarjetas de resumen del día
  overviewCards: [
    {
      platform: "facebook",
      icon: "/images/icon-facebook.svg",
      metric: "Page Views",
      value: 87,
      change: {
        percentage: 3,
        isPositive: true
      }
    },
    {
      platform: "facebook",
      icon: "/images/icon-facebook.svg",
      metric: "Likes",
      value: 52,
      change: {
        percentage: 2,
        isPositive: false
      }
    },
    {
      platform: "instagram",
      icon: "/images/icon-instagram.svg",
      metric: "Likes",
      value: 5462,
      change: {
        percentage: 2257,
        isPositive: true
      }
    },
    {
      platform: "instagram",
      icon: "/images/icon-instagram.svg",
      metric: "Profile Views",
      value: "52k",
      change: {
        percentage: 1375,
        isPositive: true
      }
    },
    {
      platform: "twitter",
      icon: "/images/icon-twitter.svg",
      metric: "Retweets",
      value: 117,
      change: {
        percentage: 303,
        isPositive: true
      }
    },
    {
      platform: "twitter",
      icon: "/images/icon-twitter.svg",
      metric: "Likes",
      value: 507,
      change: {
        percentage: 553,
        isPositive: true
      }
    },
    {
      platform: "youtube",
      icon: "/images/icon-youtube.svg",
      metric: "Likes",
      value: 107,
      change: {
        percentage: 19,
        isPositive: false
      }
    },
    {
      platform: "youtube",
      icon: "/images/icon-youtube.svg",
      metric: "Total Views",
      value: 1407,
      change: {
        percentage: 12,
        isPositive: false
      }
    }
  ],

  // Iconos para cambios positivos/negativos
  icons: {
    up: "/images/icon-up.svg",
    down: "/images/icon-down.svg"
  }
};
