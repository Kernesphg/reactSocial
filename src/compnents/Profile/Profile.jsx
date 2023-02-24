import React from 'react';
import ProfileMedia from "./Profile-media";
import ProfilePosts from "./MyPosts/Profile-posts";
import ProfileFace from "./Profile-face";

const Profile = () => {
    return (
        <div className="profile">
            <ProfileFace />
            <ProfileMedia />
            <ProfilePosts />
        </div>
    );
};

export default Profile;