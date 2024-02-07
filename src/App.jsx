import LikePost from "./components/using-hoc/LikePost";
import LikeImage from "./components/using-hoc/LikeImage";
import LikePost1 from "./components/using-render-props/LikePost1";
import LikePOst1 from "./components/using-render-props/LikeImage1";
import RenderProps from "./components/using-render-props/Render";
import "./App.css";

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      {/* Project HOC */}
      <h2>Project - HOC</h2>
      <div className="buttons">
        <LikePost />
        <LikeImage />
      </div>

      {/* Project Render Props */}
      <h2>Project - Render Props</h2>
      <div>
        <RenderProps
          render={(count, handleCount) => (
            <LikePost1 count={count} handleCount={handleCount} />
          )}
        />
        <RenderProps
          render={(count, handleCount) => (
            <LikePOst1 count={count} handleCount={handleCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;