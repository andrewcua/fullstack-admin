import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
{
productId: String,
yearlySalesTotal: Number,
yearlyTotalSoldUnits: Number,
year: Number,
monthlyData: [
    {
        month: String,
        totalSales: Number,
        totalUnits: Number,
    }
],
dailyData: [
    {    date: String,
        totalSales: Number,
        totalUnits: Number,
    }
]
},
{timestamps: true}
);

//double check this part if it's ProductStatSchema, but less likely?
const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat; 