import mongoose from "mongoose";

const subscribtionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "subscribtion Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, "subscribtion Price is required"],
      min: [0, "subscribtion Price must be positive number"],
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP", "EGP"],
      default: "USD",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
      type: String,
      enum: [
        "sports",
        "news",
        "entertainment",
        "lifestyle",
        "technology",
        "finance",
        "politics",
        "health",
        "other",
      ],

      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: true,

      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: "Start date cannot be in the future",
      },
    },
    renewalDate: {
      type: Date,

      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "End date must be after start date",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);
//Pre Calculations or renewalDate
//Auto Calculate renewalDate based on frequency and startDate

subscribtionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency]
    );
  }
  //Auto Update the status based on renewalDate
  if (this.renewalDate < new Date()) {
    this.status = "expired";
  }
});
//Export the Model
const Subscribtion = mongoose.model("Subscribtion", subscribtionSchema);

export default Subscribtion;
