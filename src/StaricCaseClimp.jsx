import React from "react";

function StaircaseClimb({ n }) {
  const countWays = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let prevPrev = 1;
    let prev = 2;
    let current;

    for (let i = 3; i <= n; i++) {
      current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
    }

    return current;
  };

  const ways = countWays(n);

  return (
    <div>
      <p>
        Number of distinct ways to climb to the top with {n} steps: {ways}
      </p>
    </div>
  );
}

export default StaircaseClimb;
