import React from "react";
import "../css/MainContent.css"
import discordVoiceChannels from "../img/discord_voice_channels.png";
import discordVoiceChannelsChatting from "../img/discord_voice_channels_chatting.png";
import discordGameList from "../img/discord_game_list.png";


const MainContent = () => {

    return (
        <div className="App">
            <div className="main-content">

                <section className="intro-section">
                    <h1>Wave 봇을 초대해 음성 채널에 입장해보세요!</h1>
                    <img src={discordVoiceChannels} alt="Wave Bot" className="header-image" />
                </section>

                <section className="nickname-display-section">
                    <h1>자동으로 게임 닉네임을 채팅에 나타냅니다. 이제 친구들과의 소통이 더 쉬워집니다 !</h1>
                    <img src={discordVoiceChannelsChatting} alt="discordVoiceChannelsChatting" />
                </section>

                <section className="nickname-registration-section">
                    <h1>간편한 닉네임 등록!</h1>
                    <p>복잡한 과정 없이 간편하게 닉네임을 등록할 수 있습니다. 원하는 닉네임으로 쉽게 설정하세요 !</p>
                    <img src={discordGameList} alt="Nickname Registration" className="feature-image" />
                </section>

                <section className="stats-search-section">
                    <h2>편리한 전적 검색</h2>
                    <p>닉네임을 클릭 한 번으로 전적 검색이 자동으로 됩니다 !</p>
                    <p>전적을 쉽게 확인하고, 게임 전략을 세우는 데 도움을 줍니다 !</p>
                    <img src="path/to/your/description-image.png" alt="Description" className="feature-image" />
                </section>

            </div>
        </div>
    )
}

export default MainContent;