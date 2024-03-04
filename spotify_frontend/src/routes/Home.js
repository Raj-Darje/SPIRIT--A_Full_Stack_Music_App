import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextwithHover";

const FocusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful Piano pieces",
    imgUrl: "https://i.ytimg.com/vi/tSsNYRUIrlk/maxresdefault.jpg",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://www.shutterstock.com/image-illustration/professional-colorful-podcast-interview-social-260nw-2251105081.jpg",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study in the background",
    imgUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-songs-youtube-thumbnails-design-template-f0fcb6a767bf70426fb7a5109709c4fe_screen.jpg?ts=1600929244",
  },
  {
    title: "Focus Flow",
    description: "Uptempo instrumental hip hop beats",
    imgUrl:
      "https://i.pinimg.com/originals/45/f9/b6/45f9b6f3b8a165ca74b9b212cb703d97.jpg",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house",
    imgUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-cover-song-thumbnail-design-template-e0f4ef858c0ccd070bbe792f3e9ce8b6_screen.jpg?ts=1591420348",
  },
];

const Home = () => {
  return (
    <div className="h-full w-full flex ">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          <div className="logoDiv p-6">
            <img src={spotify_logo} alt="Spotify Logo" width={125} />
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={"Home"}
              active
            />
            <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"Search"}
            />
            <IconText
              iconName={"icomoon-free:books"}
              displayText={"Your Library"}
            />
          </div>

          <div className="pt-5">
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Create Playlist"}
            />
            <IconText
              iconName={"mdi:cards-heart"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>

        <div className="text-gray-500  text-xs  ">
          <div className="">
            <div className="flex ">
              <div className="p-1 pb-3 pr-2 pl-3 cursor-pointer hover:text-white">
                Legal
              </div>
              <div className="p-1 pb-3 pr-2 cursor-pointer hover:text-white">
                Privacy Center
              </div>
              <div className="p-1 pb-3 cursor-pointer hover:text-white">
                Privacy Policy
              </div>
            </div>
            <div className="flex">
              <div className="p-1 pb-3 pr-2 pl-3 cursor-pointer hover:text-white">
                Cookies
              </div>
              <div className="p-1 pb-3 pr-2 cursor-pointer hover:text-white">
                About Ads
              </div>
            </div>
            <div className="flex">
              <div className="p-1 pb-3 pl-3 cursor-pointer hover:text-white">
                Cookies
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="border border-gray-200 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="carbon:earth-europe-africa" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-3/5 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>

            <div className="w-2/5 flex justify-around h-full items-center ">
              <TextWithHover displayText={"Sign up"} />

              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
          <PlaylistView titleText={"Focus"} cardsData={FocusCardsData} />
          <PlaylistView
            titleText={"Spotify Playlist"}
            cardsData={FocusCardsData}
          />
          <PlaylistView
            titleText={"Sound of India"}
            cardsData={FocusCardsData}
          />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>

      <div className="w-full flex justify-between space-x-4">
        {cardsData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-60 w-1/5 p-4 rounded-lg">
      <div className="pb-4 pt-2 ">
        <img className="w-full rounded-md" src={imgUrl} alt="" />
      </div>

      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm mb-4">{description}</div>
    </div>
  );
};

export default Home;
