
import Card from "../../components/Card/card";
import CardWithImage from "../../components/CardWithImage/cardWithImage";
import Carousel from "../../components/Carousel/carousel";
import type { IStory } from "../../utilities/Interface/IStory";
import "./dashboard.css";

const story: IStory = {
    name: "The Great Adventure",
    poster: "https://picsum.photos/536/354",
    description: '',
    id: "",
    author: "Phoniex",
    likes: 0,
    views: 0,
    chapters: 0,
    createdAt: "",
    updatedAt: "",
    mature: false,
    tags: [],
    stars: 0,
    reads: 0
}

const recentStoryImage = 'https://picsum.photos/536/354'



const Dashboard = () => {
    return (
        <div className="dashboard">
            <Carousel />
            <div className="top-stories">
                <h1>Top 5 Stories</h1>
                <div className="story-cards">
                    {new Array(5).fill(story).map((s, idx) => <CardWithImage key={idx} {...s} />)}
                </div>
            </div>

            <div className="new-updates">
                <h1>Recently Updated</h1>
                <div className="recent-update">
                    <div className="recent-update-grid">
                        <div className="recent-update-notification">
                            {new Array(5).fill({ name: 'Tester', description: 'Testing the data display' }).map((data) =>
                                <div key={data.name} className="recent-update-data">
                                    <p>{data.name}</p>
                                    <p>{data.description}</p>
                                </div>
                            )}
                            <button className="view-update-button">View Update</button>
                        </div>
                        <div className="recent-update-image">
                            <img width={'100%'} height={'100%'} src={recentStoryImage} alt="Recent Update" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="fav-stories">
                <h1>Best Read</h1>
                <div className="story-cards">
                    {new Array(3).fill(story).map((s, idx) => <Card key={idx} {...s} />)}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;