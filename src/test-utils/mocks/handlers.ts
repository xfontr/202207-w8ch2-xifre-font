import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL as string;

const handlers = [
  rest.get(apiUrl, (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        count: "36",
      })
    )
  ),

  rest.get(`${apiUrl}/?page=1`, (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        results: [
          {
            name: "a",
            starship_class: "a",
          },
        ],
      })
    )
  ),

  rest.get(`${apiUrl}/?page=2`, (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        results: [
          {
            name: "a",
            starship_class: "a",
          },
        ],
      })
    )
  ),

  rest.get(`${apiUrl}/?page=3`, (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        results: [
          {
            name: "a",
            starship_class: "a",
          },
        ],
      })
    )
  ),

  rest.get(`${apiUrl}/?page=4`, (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        results: [
          {
            name: "a",
            starship_class: "a",
          },
        ],
      })
    )
  ),
];

export default handlers;
