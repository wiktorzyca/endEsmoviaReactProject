import React, {useContext, useEffect, useState} from 'react';
import {Card, Image, Text, Badge, Group} from '@mantine/core';

import {Carousel} from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import "./Home.css"
import {useNavigate} from "react-router-dom";
import {Recipe} from "../../interfaces";
// import {myContext} from "../../app/context";
import {bringRecipies} from "../../services/api-calls";
import Surfer from "../../common/Surfer/Surfer";
import Product from "../Product/Product";
import {myContext} from "../../app/context";

const Home = () => {
    const [repies, setRecipes] = useState<Recipe[]>([]);
    const {state, SetAuth} = useContext(myContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (repies.length === 0) {
            getRecipes();
        }

        console.log(repies);
    }, [repies]);

    const getRecipes = async () => {
        bringRecipies()
            .then((res) => {
                setRecipes(res.recipes);
            })
            .catch((error) => console.log(error));
    };
    const selectRecipe = (movie) => {
        console.log(movie, "ghhhhhhhhhhhhhh")
        SetAuth("recipe", movie);
        navigate("/recipedetail");
    };
    return (
        // <div className="home-design">
        <Carousel
            className="home-design"
            withIndicators
            height={200}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={4}>

            {
                repies.map(r => {
                    return (
                        <div onClick={()=>selectRecipe(r)} key={r.id}>
                            <Carousel.Slide key={r.id}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder>
                                    <Card.Section>
                                        <Image
                                            src={r.image}
                                            height={160}
                                            alt="Norway"
                                        />
                                    </Card.Section>

                                    <Group justify="space-between" mt="md" mb="xs">
                                        <Text fw={500}>{r.name}</Text>
                                        <Badge color="pink">difficulty: {r.difficulty}</Badge>
                                    </Group>

                                    {/*<Rating defaultValue={r.rating} size="xl" count={5} color="orange"/>*/}


                                    <Surfer path={"/product"} destiny={Product}></Surfer>
                                </Card>
                            </Carousel.Slide>
                        </div>
                        )
                })
            }
        </Carousel>
        // </div>

    );
};

export default Home;