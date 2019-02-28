const rpcJson = {
  "pobo": false,
  "conversionSettings": {
    "allowedBuyCcys": [
      "CHF",
      "HKD",
      "EUR",
      "CAD",
      "MYR",
      "USD",
      "INR",
      "VND",
      "CNY",
      "THB",
      "AUD",
      "SGD",
      "JPY",
      "GBP",
      "IDR",
      "NZD",
      "PHP"
    ],
    "allowedSellCcys": [
      "AUD",
      "CHF",
      "HKD",
      "SGD",
      "JPY",
      "EUR",
      "GBP",
      "CAD",
      "USD",
      "NZD",
      "CNY"
    ],
    "feeSchedule": [
      {
        "buyCcy": "HKD",
        "sellCcy": "USD",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 0.2
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 0.2
            }
          }
        ]
      },
      {
        "buyCcy": "USD",
        "sellCcy": "HKD",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 0.2
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 0.2
            }
          }
        ]
      },
      {
        "buyCcy": "CNY",
        "sellCcy": "USD",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 0.2
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 0.2
            }
          }
        ]
      },
      {
        "buyCcy": "USD",
        "sellCcy": "CNY",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 0.2
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 0.2
            }
          }
        ]
      },
      {
        "buyCcy": "CNY",
        "sellCcy": "HKD",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 0.2
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 0.2
            }
          }
        ]
      },
      {
        "buyCcy": "HKD",
        "sellCcy": "CNY",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 0.2
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 0.2
            }
          }
        ]
      },
      {
        "buyCcy": "IDR",
        "sellCcy": "*",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 1
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 1
            }
          }
        ]
      },
      {
        "buyCcy": "INR",
        "sellCcy": "*",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 1
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 1
            }
          }
        ]
      },
      {
        "buyCcy": "MYR",
        "sellCcy": "*",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 1
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 1
            }
          }
        ]
      },
      {
        "buyCcy": "PHP",
        "sellCcy": "*",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 1
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 1
            }
          }
        ]
      },
      {
        "buyCcy": "THB",
        "sellCcy": "*",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 1
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 1
            }
          }
        ]
      },
      {
        "buyCcy": "VND",
        "sellCcy": "*",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 1
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 1
            }
          }
        ]
      },
      {
        "buyCcy": "*",
        "sellCcy": "*",
        "rateMarkup": {
          "type": "PERCENT",
          "value": 0.3
        },
        "rateMarkups": [
          {
            "type": "TRADE_DAY_RANGE",
            "from": 0,
            "to": 3,
            "markup": {
              "type": "PERCENT",
              "value": 0.3
            }
          }
        ]
      }
    ],
    "conversionLimit": {
      "perTrade": {
        "min": 10,
        "max": 5000000,
        "ccy": "USD"
      },
      "openPosition": {
        "min": 0,
        "max": 0,
        "ccy": "USD"
      },
      "maxValueDate": {
        "amount": 3,
        "type": "TRADE_DAYS"
      }
    },
    "lpRoutingRules": [
      {
        "sourceCcy": "*",
        "paymentCcy": "*",
        "lpID": "ANY",
        "excludedLpIDs": []
      }
    ],
    "cardedRateSettings": {
      "cardedRateSettings": [],
      "vendorSpecificSettings": {
        "scbSettings": {
          "flowSettings": {
            "flowOneCurrencies": [
              "AUD",
              "HKD",
              "SGD",
              "JPY",
              "EUR",
              "GBP",
              "USD",
              "CAD",
              "NZD",
              "CNY"
            ],
            "flowTwoCurrencies": [
              "IDR",
              "MYR",
              "PHP",
              "INR",
              "VND",
              "THB"
            ]
          }
        }
      }
    },
    "settlementMode": "SETTLEMENT_DATE"
  },
  "paymentSettings": {
    "test": 123123,
    // "bankAccountValidationLevels": {},
    "paymentRetryFeeMode": "POST_PAID",
    "paymentReturnMode": "CHARGE_FEE",
    "feeSchedule": [
      {
        "countryCode": "*",
        "paymentCcy": "THB",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "FIXED",
            "value": 5,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "*",
        "paymentCcy": "MYR",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "FIXED",
            "value": 5,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "*",
        "paymentCcy": "PHP",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "FIXED",
            "value": 5,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "*",
        "paymentCcy": "VND",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "FIXED",
            "value": 5,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "*",
        "paymentCcy": "IDR",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "FIXED",
            "value": 5,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "*",
        "paymentCcy": "INR",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "FIXED",
            "value": 5,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "*",
        "paymentCcy": "*",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "FIXED",
            "value": 3,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "*",
        "paymentCcy": "*",
        "paymentMethod": "SWIFT",
        "fees": [
          {
            "type": "FIXED",
            "value": 15,
            "ccy": "USD"
          }
        ],
        "paymentAction": "ALLOW_PAYMENT"
      },
      {
        "countryCode": "CN",
        "paymentCcy": "CNY",
        "paymentMethod": "LOCAL",
        "fees": [
          {
            "type": "PERCENT",
            "value": 0.1
          }
        ],
        "paymentAction": "DENY_PAYMENT"
      }
    ],
    "additionalSwiftCharges": [
      {
        "countryCode": "AD",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AG",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AI",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AL",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AN",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AO",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AT",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AU",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "AW",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "BA",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "BD",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "BE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "BG",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "BR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CA",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CH",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CL",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CN",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CO",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CW",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CY",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "CZ",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "DE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "DK",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "DM",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "EC",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "EE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "EG",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "ES",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "FI",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "FR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "GB",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "GD",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "GE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "GG",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "GI",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "GR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "GY",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "HK",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "HN",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "HR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "HU",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "ID",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "IE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "IL",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "IM",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "IN",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "IS",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "IT",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "JE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "JM",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "JP",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "KE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "KH",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "KR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "KZ",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "KW",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "LB",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "LI",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "LT",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "LU",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "LV",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MA",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MC",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MD",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MK",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MQ",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MT",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MX",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "MY",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "NG",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "NL",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "NO",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "NZ",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "OM",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "PE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "PH",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "PK",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "PL",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "PM",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "PR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "PT",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "RO",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "RS",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "SA",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "SE",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "SG",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "SI",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "SK",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "SM",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "SV",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "TH",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "TN",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "TR",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "TW",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "UG",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "US",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "UY",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "VN",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "YT",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      },
      {
        "countryCode": "ZA",
        "fee": {
          "type": "FIXED",
          "value": 10,
          "ccy": "USD"
        },
        "option": "PAYER"
      }
    ],
    "paymentLimit": {
      "perTradeP2P": {
        "min": 10,
        "max": 100000000,
        "ccy": "USD"
      },
      "perTradeB2P": {
        "min": 10,
        "max": 100000000,
        "ccy": "USD"
      },
      "perTradeP2B": {
        "min": 10,
        "max": 100000000,
        "ccy": "USD"
      },
      "perTradeB2B": {
        "min": 10,
        "max": 100000000,
        "ccy": "USD"
      },
      "daily": {
        "min": 0,
        "max": 0,
        "ccy": "USD"
      }
    },
    "addressValidationMode": "ALLOW_COMPONENTS_ONLY",
    "paymentPriority": 5,
    "ibanAccountNumberDetection": "NONE"
  },
  "fundDeductionMode": "PRE_TX_CREATION",
  "notificationURL": null,
  "conversionPaymentSettings": {
    "lpRoutingRules": [
      {
        "countryCode": "*",
        "paymentCcy": "*",
        "transType": "ANY",
        "paymentMethod": "ANY",
        "lpID": "ANY",
        "validPaymentMHs": null,
        "excludedLpIDs": null,
        "excludedPaymentMHs": null,
        "sourceCcy": "*"
      },
      {
        "countryCode": "HK",
        "paymentCcy": "USD",
        "transType": "ANY",
        "paymentMethod": "ANY",
        "lpID": "ANY",
        "validPaymentMHs": [
          "AirwallexHKDBS"
        ],
        "excludedLpIDs": [],
        "excludedPaymentMHs": [],
        "sourceCcy": "*"
      }
    ]
  },
  "complianceSettings": {
    "supportingDocsSupplyMode": "SYNC",
    "orderDetailsSource": "FILE_UPLOAD"
  },
  "virtualBankAccountSettings": {
    "enableEditAccountName": false,
    "providerConfig": [
      {
        "currencyCode": "EUR",
        "countryCode": "DE",
        "providerSettings": {
          "numberOfVbaAllowed": 20,
          "vbaProvider": "SAXO"
        }
      },
      {
        "currencyCode": "USD",
        "countryCode": "US",
        "providerSettings": {
          "numberOfVbaAllowed": 20,
          "vbaProvider": "CFSB"
        }
      },
      {
        "currencyCode": "GBP",
        "countryCode": "GB",
        "providerSettings": {
          "numberOfVbaAllowed": 20,
          "vbaProvider": "SAXO"
        }
      }
    ],
    "feeConfig": [
      {
        "currencyCode": "EUR",
        "countryCode": "DE",
        "vbaProvider": "SAXO",
        "fee": {
          "type": "PERCENT",
          "value": 0.3
        }
      },
      {
        "currencyCode": "USD",
        "countryCode": "US",
        "vbaProvider": "CFSB",
        "fee": {
          "type": "PERCENT",
          "value": 0.3
        }
      },
      {
        "currencyCode": "GBP",
        "countryCode": "GB",
        "vbaProvider": "SAXO",
        "fee": {
          "type": "PERCENT",
          "value": 0.3
        }
      }
    ]
  },
  "validationSettings": {
    "validationStrength": "STRICT"
  },
  "settlementPaymentDateOptions": {
    "allowTOD": true,
    "allowWeekend": true,
    "allowCcyHoliday": true
  },
  "clientViewOptions": {
    "partnerRateDisplayRules": [
      {
        "lpID": "ANY",
        "mode": "CLIENT_RATE"
      }
    ]
  },
  "developerSettings": {
    "publishableKeyRenewalCount": 1
  },
  "clientCreditSettings": {
    "currencyCredits": {}
  },
  "paymentPreference": {
    "pobo": false,
    "reference": false
  },
  "ddDcFeeSetting": {
    "directDebitFee": {},
    "directCreditFee": {},
    "directDebitFeePaidBy": {},
    "directCreditFeePaidBy": {}
  },
  "connectedPermissionSetting": {
    "permissions": [
      "DIRECT_CREDIT"
    ],
    "permissionContext": {}
  },
  "connectedPermissionSettingM2P": {
    "permissions": [
      "DIRECT_CREDIT"
    ]
  },
  "connectedNotificationSetting": {
    "initialNotificationSetting": "NOTIFICATION_OFF"
  },
  "connectedAccountSettings": {
    "accountConnectedLimitation": {
      "maxConnectedAccountCount": 100
    }
  }
}

const apiJson = {
  pobo111: true, 
  allowedBuyCcys111: '哈哈哈哈',
  cardedRateSettings: {
    cardedRateSettings: 'taxi 1111 ...'
  }
}

module.exports = {
  rpcJson,
  apiJson
}