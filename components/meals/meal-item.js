"use client";
import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

import { deleteMealAction } from "@/lib/actions";

export default function MealItem({ title, slug, image, summary, creator }) {
  function handleDelete(slug) {
    // console.log(slug);
    deleteMealAction(slug);
    window.location.reload();
  }

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>Location : {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>

          <button onClick={() => handleDelete(slug)}>Delete</button>
        </div>
      </div>
    </article>
  );
}
