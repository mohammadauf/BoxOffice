import React from "react";
import ShowCard from "../Show/ShowCard";
import Not_found_Img from "../../Image/404.jpg";
import { useShows } from "../../misc/Custom-Hooks";
import { FlexGrid } from "../styled";

const ShowGrid = ({data} ) => {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        };

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : Not_found_Img}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;





// import React from "react";
// import ShowCard from "../Show/ShowCard";
// import Not_found_Img from "../../Image/404.jpg";
// import { useShows } from "../../misc/Custom-Hooks";
// import { FlexGrid } from "../styled";
// const ShowGrid = ({ data }) => {
//   const [starredShows, dispatchStarred] = useShows();
// // console.log(data);
//   return (
//     <FlexGrid>
//       {data.map(({show}) => {
//         const inStarted = starredShows.includes(show.id);

//         const onStarredClick = () => {
//           if (inStarted) {
//             dispatchStarred({ type: "REMOVE", showId: show.id });
//           } else {
//             dispatchStarred({ type: "ADD", showId: show.id });
//           }
//         };

//         return (
//           <ShowCard
//             key={show.id}
//             show={show.url}
//             image={show.image ? show.image.medium : Not_found_Img}
//             name={show.name}
//             id={show.id}
//             language={show.language}
//             summary={show.summary}
//             onStarredClick={onStarredClick}
//             inStarted={inStarted}
//           />
//         );
//       })}
//       ;
//     </FlexGrid>
//   );
// };

// export default ShowGrid;
