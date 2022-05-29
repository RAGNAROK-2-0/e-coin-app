import { useJwt } from "react-jwt";

function DecodeJWT(jwt) {
    return useJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lTW9uZ29EYiI6ImNhbWlzIiwiZW1haWwiOiJjYW1pbGFhbHZlc2Rlb2xpdmVpcmE4MDNAZ21haWwuY29tIiwiaWF0IjoxNjUzODUzNjE0LCJleHAiOjE2NTM5NDAwMTR9.91X1efyPI4mkhbc7YcvH9IqQPg-gcHYbMcXmeqzVizQ");
}

export {DecodeJWT}