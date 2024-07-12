import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {myContext} from "../../app/context";
import {Carousel} from "@mantine/carousel";
import {Badge, Card, Group, Image, Text} from "@mantine/core";
import Surfer from "../../common/Surfer/Surfer";
import Product from "../Product/Product";
import "./Favourite.css"
const Favourite = () => {
    const { state, SetAuth } = useContext(myContext)
    const navigate = useNavigate();

    const selectRecipe = (movie) => {
        console.log(movie, "ghhhhhhhhhhhhhh")
        SetAuth("recipe", movie);
        navigate("/recipedetail");
    };
    return (
        <div>
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
                    state.global.favourite.map(r => {
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
                {/* ...other slides */}
            </Carousel>
        </div>
    );
};

export default Favourite;