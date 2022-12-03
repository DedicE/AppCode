import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import petvet from "./images/petvet.webp";
import petgroo from "./images/petgroo.webp";
import petwalk from "./images/petwalk.webp";
import petshop from "./images/petshop.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="containerbox">
        <Card sx={{ maxWidth: 345 }} className="card">
          <Link to="/pet-vet" className="image">
            <CardMedia
              style={{ height: "300px" }}
              component="img"
              height="190"
              image={petvet}
              alt="pet vet"
            />
          </Link>
          <Link to="/pet-vet" className="content">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Vet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yearly veterinary visits can help prevent health issues in your
                pet, through routine vaccinations, and flea, tick, and parasite
                prevention.
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="card">
          <Link to="/pet-vet" className="image">
            <CardMedia
              style={{ height: "300px" }}
              component="img"
              height="190"
              image={petgroo}
              alt="pet groom"
            />
          </Link>
          <Link to="/pet-vet" className="content">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Groom
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Regularly brushing your pet will help keep their fur in good
                condition by removing dirt, spreading natural oils, preventing
                tangles
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </div>
      <div className="containerbox">
        <Card sx={{ maxWidth: 345 }} className="card">
          <Link to="/pet-vet" className="image">
            <CardMedia
              style={{ height: "300px" }}
              component="img"
              height="190"
              image={petwalk}
              alt="pet walk"
            />
          </Link>
          <Link to="/pet-vet" className="content">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Walk
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Going for a walk can provide your dog with more than just a
                bathroom break. It can give them physical exercise and mental
                stimulation.
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="card">
          <Link to="/pet-vet" className="image">
            <CardMedia
              style={{ height: "300px" }}
              component="img"
              height="190"
              image={petshop}
              alt="pet shop"
            />
          </Link>
          <Link to="/pet-vet" className="content">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Shop
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get the best pet supplies online and in store! PetSmart offers
                quality products and accessories for a healthier, happier pet.
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};
export default Home;
