import { FC } from "react";
import { IconDice } from "../icons/IconDice";
import { IconDivider } from "../icons/IconDivider";
import { useAdviceContext } from "../context/AdviceContext";

export const Content: FC = () => {
  const { data, refetch, loading, error } = useAdviceContext();

  return (
    <div className="content">
      {!loading && !error && (
        <>
          <h1 className="title">ADVICE #{data?.id}</h1>
          <p className="text">"{data?.advice}"</p>
        </>
      )}

      <div className="divider">
        <IconDivider />
      </div>

      <button
        type="button"
        onClick={refetch}
        className="btn"
        aria-label="generate new advice"
      >
        <IconDice />
      </button>
    </div>
  );
};
