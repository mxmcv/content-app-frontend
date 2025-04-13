import React from "react";

const PostComponent = ({ username, postText }) => {
  return (
    <div className="post-container">
      <div className="profile-container">
        <img
          src="/icons/reddit-pfp.png"
          alt="Reddit Icon"
          className="reddit-icon"
        />
        <div className="text-block">
          <div className="username">{username}</div>
          <div className="badges-row">
            <img src="/icons/award1.png" alt="Award 1" />
            <img src="/icons/award3.png" alt="Award 3" />
            <img src="/icons/award4.png" alt="Award 4" />
            <img src="/icons/award5.png" alt="Award 5" />
            <img src="/icons/award6.png" alt="Award 6" />
            <img src="/icons/award7.png" alt="Award 7" />
          </div>
        </div>
      </div>

      <p className="post-text">{postText}</p>

      <div className="footer-row">
        <span className="likes">
          <img src="/icons/heart-icon.png" alt="Like Icon" />
          99+
        </span>
        <span className="comments">
          <img src="/icons/comment-icon.png" alt="Comment Icon" />
          99+
        </span>
      </div>

      <style jsx>{`
        /* Outer Container */
        .post-container {
          width: 300%;
          background: #fff;
          border-radius: 12px;
          padding: 12px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          font-family: Arial, sans-serif;
          font-weight: bold;
        }

        /* Profile Container: Icon + Text Block */
        .profile-container {
          display: flex;
          align-items: center; /* Centers icon and text-block vertically */
          gap: 8px;
        }

        .reddit-icon {
          width: 40px;
          height: 40px;
          /* If you want the icon slightly lower or higher, adjust margin-top. 
             e.g., margin-top: 8px; or margin-bottom. */
        }

        /* Text Block: Username on top, badges row below */
        .text-block {
          display: flex;
          flex-direction: column;
          /* justify-content: center; // uncomment if you want the text block 
                                        centered relative to the icon’s center */
        }

        .username {
          line-height: 1.2;
          margin-bottom: 2px;
          letter-spacing: -0.4px;
        }

        .badges-row {
          display: flex;
          gap: 4px;
        }

        .badges-row img {
          width: 18px;
          height: auto;
        }

        /* Post Text */
        .post-text {
          margin: 12px 0 0 0; /* space between profile container and post text */
          font-size: 15px;
          letter-spacing: -0.4px;
          line-height: 1.2;
        }

        /* Footer Row: Likes & Comments */
        .footer-row {
          display: flex;
          gap: 16px;
          align-items: center; /* ensures icons/text align vertically */
          font-size: 12px;
          color: gray;
          margin-top: 10px;
        }

        /* Ensure each segment (likes/comments) aligns icon with text */
        .footer-row span {
          display: flex;
          align-items: center;
        }

        .footer-row img {
          width: 17px;
          height: auto;
          margin-right: 4px;
        }
      `}</style>
    </div>
  );
};

export default PostComponent;
