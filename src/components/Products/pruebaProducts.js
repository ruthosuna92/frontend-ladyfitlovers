const allProducts = [
    {
      id: 1,
      name: "MUSCULOSA BODY",
      image: "https://d22fxaf9t8d39k.cloudfront.net/e7932f7f83718e372db5316f598c872d4daacfd08d1e496e80a70112c821518a205310.jpg",
      price: 8400,
      sales: 0,
      stock: [
        {
          size: "xl",
          color: "blue",
          quantity: 15
        },
        {
          size: "xxl",
          color: "black",
          quantity: 11
        },
        {
          size: "l",
          color: "white",
          quantity: 12
        }
      ],
      createdAt: "2023-09-28T18:46:13.757Z",
      updatedAt: "2023-09-28T18:46:13.757Z"
    },
    {
      id: 2,
      name: "TOP BODY MORLEY",
      image: "https://d22fxaf9t8d39k.cloudfront.net/4d87f7c6882df991697a0291ce87d4ed185cf80beebbe54d073b294ece52ae7a205310.jpg",
      price: 7900,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "red",
          quantity: 9
        },
        {
          size: "m",
          color: "black",
          quantity: 14
        }
      ],
      createdAt: "2023-09-28T18:46:41.861Z",
      updatedAt: "2023-09-28T18:46:41.861Z"
    },
    {
      id: 3,
      name: "REMERA MANGA LARGA",
      image: "https://d22fxaf9t8d39k.cloudfront.net/38e94b7bc0a1e5cdbc1c3523a0a138a1ca007735ba6eec97394a48f542c47469205310.jpg",
      price: 8500,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "gray",
          quantity: 7
        },
        {
          size: "m",
          color: "blue",
          quantity: 10
        },
        {
          size: "l",
          color: "white",
          quantity: 8
        }
      ],
      createdAt: "2023-09-28T18:46:55.783Z",
      updatedAt: "2023-09-28T18:46:55.783Z"
    },
    {
      id: 4,
      name: "BUZO ICON FRIZADO",
      image: "https://d22fxaf9t8d39k.cloudfront.net/e02e514eaaccf45fd5c3def1151f561d87d8227a872e3e7fc6d601f4990eeb20205310.jpg",
      price: 14600,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 5
        },
        {
          size: "m",
          color: "gray",
          quantity: 12
        },
        {
          size: "l",
          color: "blue",
          quantity: 9
        }
      ],
      createdAt: "2023-09-28T18:47:15.479Z",
      updatedAt: "2023-09-28T18:47:15.479Z"
    },
    {
      id: 5,
      name: "CAMPERA PELO DE OSA",
      image: "https://d22fxaf9t8d39k.cloudfront.net/63136f1f197766dcdc96f7498f5b48cd3fb07811d5f8d89ae804e9d20b54a53b205310.jpg",
      price: 25000,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "brown",
          quantity: 6
        },
        {
          size: "m",
          color: "black",
          quantity: 11
        },
        {
          size: "l",
          color: "gray",
          quantity: 7
        }
      ],
      createdAt: "2023-09-28T18:47:40.110Z",
      updatedAt: "2023-09-28T18:47:40.110Z"
    },
    {
      id: 6,
      name: "SHORT NEGRO LADY FIT",
      image: "https://d22fxaf9t8d39k.cloudfront.net/4ffe0c5ff7794348e09113358ff7b2aa7be185ce847482548fef243a448592a3205310.jpg",
      price: 8100,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 10
        },
        {
          size: "m",
          color: "black",
          quantity: 15
        },
        {
          size: "l",
          color: "black",
          quantity: 12
        }
      ],
      createdAt: "2023-09-28T18:47:50.914Z",
      updatedAt: "2023-09-28T18:47:50.914Z"
    },
    {
      id: 7,
      name: "NOIR CLUB BIKER",
      image: "https://d22fxaf9t8d39k.cloudfront.net/32da740e9a4bdea20cee86fa25dba8149b78ff929159f32d7aa3b2421ca0901e205310.jpg",
      price: 21000,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 8
        },
        {
          size: "m",
          color: "black",
          quantity: 10
        },
        {
          size: "l",
          color: "black",
          quantity: 9
        }
      ],
      createdAt: "2023-09-28T18:48:05.339Z",
      updatedAt: "2023-09-28T18:48:05.339Z"
    },
    {
      id: 8,
      name: "CALZA 3-4 DARK FUCSIA",
      image: "https://d22fxaf9t8d39k.cloudfront.net/d957d1a94a4405eaabc8c1b39865a3a97ee331f0073f95b6f0805af4bc34cfe6205310.jpg",
      price: 7400,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "fuchsia",
          quantity: 12
        },
        {
          size: "m",
          color: "fuchsia",
          quantity: 10
        },
        {
          size: "l",
          color: "fuchsia",
          quantity: 11
        }
      ],
      createdAt: "2023-09-28T18:48:22.562Z",
      updatedAt: "2023-09-28T18:48:22.562Z"
    },
    {
      id: 9,
      name: "REMERA STRIPE DETAIL",
      image: "https://d22fxaf9t8d39k.cloudfront.net/8a6a86b44b4c93c72e729c5093f147c0b6c28f321cd99a0d6f800c2b58a26cf8205310.jpg",
      price: 7600,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "blue",
          quantity: 9
        },
        {
          size: "m",
          color: "gray",
          quantity: 12
        },
        {
          size: "l",
          color: "black",
          quantity: 10
        }
      ],
      createdAt: "2023-09-28T18:48:34.008Z",
      updatedAt: "2023-09-28T18:48:34.008Z"
    },
    {
      id: 10,
      name: "JEAN SKINNY",
      image: "https://d22fxaf9t8d39k.cloudfront.net/849e465d6e6d95c109da927c08e5b365cb5fc882e54836b23f834d5a30f6b180205310.jpg",
      price: 16500,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "blue",
          quantity: 7
        },
        {
          size: "m",
          color: "blue",
          quantity: 9
        },
        {
          size: "l",
          color: "blue",
          quantity: 8
        }
      ],
      createdAt: "2023-09-28T18:48:47.513Z",
      updatedAt: "2023-09-28T18:48:47.513Z"
    },
    {
      id: 11,
      name: "MUSCULOSA RISE",
      image: "https://d22fxaf9t8d39k.cloudfront.net/767b6d5074ab366b078f79cfe4e05a1305eb707a4413b75e1cbcdfb771b189fa205310.jpg",
      price: 7500,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 11
        },
        {
          size: "m",
          color: "blue",
          quantity: 13
        },
        {
          size: "l",
          color: "gray",
          quantity: 10
        }
      ],
      createdAt: "2023-09-28T18:49:00.242Z",
      updatedAt: "2023-09-28T18:49:00.242Z"
    },
    {
      id: 12,
      name: "SWEATER FRONT PRINT",
      image: "https://d22fxaf9t8d39k.cloudfront.net/c6f1b3cd482a75308cf3a11e8e85c52c653da0c5e3f8f0a90e2b7cdd36efb7a7205310.jpg",
      price: 11900,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "gray",
          quantity: 6
        },
        {
          size: "m",
          color: "black",
          quantity: 7
        },
        {
          size: "l",
          color: "white",
          quantity: 8
        }
      ],
      createdAt: "2023-09-28T18:49:14.593Z",
      updatedAt: "2023-09-28T18:49:14.593Z"
    },
    {
      id: 13,
      name: "CAMPERA MORLEY",
      image: "https://d22fxaf9t8d39k.cloudfront.net/c119b44da1c1bc44ed1e76f9684e1e24e94d20800c03a506a694df4ea4c73cc4205310.jpg",
      price: 16900,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 5
        },
        {
          size: "m",
          color: "gray",
          quantity: 6
        },
        {
          size: "l",
          color: "white",
          quantity: 7
        }
      ],
      createdAt: "2023-09-28T18:49:26.290Z",
      updatedAt: "2023-09-28T18:49:26.290Z"
    },
    {
      id: 14,
      name: "VESTIDO PRINT ANIMAL",
      image: "https://d22fxaf9t8d39k.cloudfront.net/a63fbcbe7ef6bbbdadcd3deedf8e597da2141bf95eb6e17a38f343051f0e903f205310.jpg",
      price: 16500,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "animal print",
          quantity: 10
        },
        {
          size: "m",
          color: "animal print",
          quantity: 9
        },
        {
          size: "l",
          color: "animal print",
          quantity: 11
        }
      ],
      createdAt: "2023-09-28T18:49:38.688Z",
      updatedAt: "2023-09-28T18:49:38.688Z"
    },
    {
      id: 15,
      name: "BUZO WILD LION",
      image: "https://d22fxaf9t8d39k.cloudfront.net/c0bf59b4e614d65e0ef1ca1ef227a12e5444d15d764c608a100899362162c8ec205310.jpg",
      price: 14400,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "animal print",
          quantity: 8
        },
        {
          size: "m",
          color: "animal print",
          quantity: 9
        },
        {
          size: "l",
          color: "animal print",
          quantity: 7
        }
      ],
      createdAt: "2023-09-28T18:49:53.293Z",
      updatedAt: "2023-09-28T18:49:53.293Z"
    },
    {
      id: 16,
      name: "REMERA BASIC",
      image: "https://d22fxaf9t8d39k.cloudfront.net/d2b5457d3e7c139a60c59f0818d9f1e1f9d7299cf243e29a90b74b6fc9821a68205310.jpg",
      price: 7000,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 12
        },
        {
          size: "m",
          color: "white",
          quantity: 10
        },
        {
          size: "l",
          color: "gray",
          quantity: 11
        }
      ],
      createdAt: "2023-09-28T18:50:05.668Z",
      updatedAt: "2023-09-28T18:50:05.668Z"
    },
    {
      id: 17,
      name: "CAMISA LONG PRINT",
      image: "https://d22fxaf9t8d39k.cloudfront.net/83c44144f8c6cf1d6bb6a9fc96feff2a36a07172660d24ce0f36df02d146fabb205310.jpg",
      price: 12500,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "animal print",
          quantity: 7
        },
        {
          size: "m",
          color: "animal print",
          quantity: 8
        },
        {
          size: "l",
          color: "animal print",
          quantity: 9
        }
      ],
      createdAt: "2023-09-28T18:50:17.950Z",
      updatedAt: "2023-09-28T18:50:17.950Z"
    },
    {
      id: 18,
      name: "TOP LUREX",
      image: "https://d22fxaf9t8d39k.cloudfront.net/75dd5e63f859f984b54a24ffca9171b5b8e1e8e4f7bf1b17de4af09df0c31f9a205310.jpg",
      price: 10500,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 8
        },
        {
          size: "m",
          color: "silver",
          quantity: 7
        },
        {
          size: "l",
          color: "gold",
          quantity: 6
        }
      ],
      createdAt: "2023-09-28T18:50:29.345Z",
      updatedAt: "2023-09-28T18:50:29.345Z"
    },
    {
      id: 19,
      name: "CAMPERA CIRE",
      image: "https://d22fxaf9t8d39k.cloudfront.net/3aaf43bf97a2dbfa7c77173f3c0d8566e0dce75f177ec9532f62a38e1a369c6e205310.jpg",
      price: 16800,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 9
        },
        {
          size: "m",
          color: "blue",
          quantity: 8
        },
        {
          size: "l",
          color: "gray",
          quantity: 7
        }
      ],
      createdAt: "2023-09-28T18:50:41.731Z",
      updatedAt: "2023-09-28T18:50:41.731Z"
    },
    {
      id: 20,
      name: "JEAN CLASSIC FIT",
      image: "https://d22fxaf9t8d39k.cloudfront.net/9ea3ce93715fc7e49c64f8202c4a8323c99f68096e8b73c21f73b066ecf3b6b5205310.jpg",
      price: 15500,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "blue",
          quantity: 6
        },
        {
          size: "m",
          color: "blue",
          quantity: 7
        },
        {
          size: "l",
          color: "blue",
          quantity: 8
        }
      ],
      createdAt: "2023-09-28T18:50:54.173Z",
      updatedAt: "2023-09-28T18:50:54.173Z"
    },
    {
      id: 21,
      name: "REMERA VELVET",
      image: "https://d22fxaf9t8d39k.cloudfront.net/f3e82fc01d4eafe56b8ebc9c62e3c81b0fdef3ab3611e0c8e4a189a6351ca640205310.jpg",
      price: 8800,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 9
        },
        {
          size: "m",
          color: "gray",
          quantity: 10
        },
        {
          size: "l",
          color: "pink",
          quantity: 11
        }
      ],
      createdAt: "2023-09-28T18:51:07.461Z",
      updatedAt: "2023-09-28T18:51:07.461Z"
    },
    {
      id: 22,
      name: "SHORT JACQUARD",
      image: "https://d22fxaf9t8d39k.cloudfront.net/34c29edebc8fc53914b5ebc08d9ce96773d3c6e24b8a98d4a471398ffecf7e97205310.jpg",
      price: 8700,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "black",
          quantity: 8
        },
        {
          size: "m",
          color: "white",
          quantity: 9
        },
        {
          size: "l",
          color: "gray",
          quantity: 10
        }
      ],
      createdAt: "2023-09-28T18:51:20.079Z",
      updatedAt: "2023-09-28T18:51:20.079Z"
    },
    {
      id: 23,
      name: "CAMISA PRINT SNAKE",
      image: "https://d22fxaf9t8d39k.cloudfront.net/7d19343022aae45ed4d7244d83637f7d8fdd5f6ed83dd6d687485bc59c810dd8205310.jpg",
      price: 12800,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "snake print",
          quantity: 10
        },
        {
          size: "m",
          color: "snake print",
          quantity: 8
        },
        {
          size: "l",
          color: "snake print",
          quantity: 9
        }
      ],
      createdAt: "2023-09-28T18:51:32.536Z",
      updatedAt: "2023-09-28T18:51:32.536Z"
    },
    {
      id: 24,
      name: "BUZO TAPADO",
      image: "https://d22fxaf9t8d39k.cloudfront.net/c165f1631ef53e3d01e4f0d3d7f60b13ce4ed3ea6deff508ff98d35af3c1e430205310.jpg",
      price: 17000,
      sales: 0,
      stock: [
        {
          size: "s",
          color: "gray",
          quantity: 7
        },
        {
          size: "m",
          color: "blue",
          quantity: 9
        },
        {
          size: "l",
          color: "black",
          quantity: 8
        }
      ],
      createdAt: "2023-09-28T18:51:45.340Z",
      updatedAt: "2023-09-28T18:51:45.340Z"
    }
  ];

  export default allProducts