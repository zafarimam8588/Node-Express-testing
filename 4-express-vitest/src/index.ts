import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", (req, res) => {
  const parsedResponse = sumInput.safeParse(req.body);

  if (parsedResponse.success) {
    const sum = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
      sum,
    });
  }
  res.status(411).json({
    message: "Incorrect inputs",
  });
});

app.get("/sum", (req, res) => {
  const parsedResponse = sumInput.safeParse({
    a: Number(req.headers["a"]),
    b: Number(req.headers["b"]),
  });

  if (parsedResponse.success) {
    const sum = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
      sum,
    });
  }
  res.status(411).json({
    message: "Incorrect inputs",
  });
});
