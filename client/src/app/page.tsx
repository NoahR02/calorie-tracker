'use client';
import Image from "next/image";
import {
    BottomNavigation,
    BottomNavigationAction,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import {Box} from "@mui/system";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Fastfood, MonitorWeightSharp} from "@mui/icons-material";

export default function Home() {
  return (
    <Box component={"main"} sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant={"h2"}>Calorie Tracker</Typography>
        
        <Button variant={"contained"}>Export your Data</Button>
        
        <LineChart
            xAxis={[{ data: [250, 245, 242, 235, 215, 206, 200] }]}
            series={[
                {
                    data: [250, 245, 242, 235, 215, 206, 200],
                },
            ]}
            width={500}
            height={300}
        />

        <BottomNavigation
            showLabels
            value={0}
            sx={{ width: '100%' }}
        >
            <BottomNavigationAction label="Food" icon={<Fastfood />} />
            <BottomNavigationAction label="Weight" icon={<MonitorWeightSharp />} />
        </BottomNavigation>
    </Box>
  );
}
