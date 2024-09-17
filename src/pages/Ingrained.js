import React from 'react'
import Video from "next-video";
import './Ingrained.css'
function Ingrained() {

  return (
    <div>
      &nbsp;                              
      <h1>Ingrained Prototype</h1>
      <div>
      &nbsp;
      <a className='git_ing'
         href='https://github.com/ioannis-peppas/Ingrained'
         target="_blank">
            GitHub </a> <i id='fa-github2' class="fa-brands fa-github"></i>
      
      <p className='first-p'>Ingrained is an innovative open-world sandbox game that dynamically alters its storyline and events based on player decisions. Featuring unique boss fights, Ingrained responds to players' choices, crafting a personalized experience. The game employs advanced styling technologies and dynamic storyline mechanics to build a captivating and immersive environment.</p>
      
      <Video src='/videos/video-4.mp4'
             className='showcase_video'
             style={{maxWidth: '42rem'}} 
             ></Video>

      <p className='second-p'>Styling Technologies
                              Ingrained leverages Unreal Engine's Niagara particle systems to create visually stunning boss appearances and attack sequences. The boss's idle state involves complex algorithms that manipulate 40,000 particles, altering their shape, size, and behavior in real-time. By varying the forces, colors, and scales of each particle, the game achieves a mesmerizing and lifelike representation.
                              Projectile angles are precisely calculated through mathematical equations, ensuring maximum accuracy by predicting the player's position. These angles are then converted into directional velocities to launch projectiles with pinpoint precision. Additionally, visual scripts are implemented to spawn attack visuals on the ground, with overlapping objects determining the attacks' vertical movement and ensuring they are always positioned just above the ground.
      </p >
      <p>Dynamic Storyline Mechanics
         Ingrained employs a relational database structure to track player interactions with non-playable characters (NPCs), which in turn influence the storyline. Interacting with NPCs provides clues about potential boss fight locations, depending on the type of character. The game maintains statistics on player behavior, with each NPC category tracking different standards to offer relevant hints.
         These NPC categories are meticulously listed and ordered, allowing algorithms to generate a boss fight location even when multiple categories provide an equal number of hints. This dynamic system ensures that each player's journey through Ingrained is unique and tailored to their choices and actions.
         Epilogue
         As the dust settles and the echoes of battle fade, the world of Ingrained continues to evolve, shaped by the legacy of your actions. The choices you made and the paths you forged have left an indelible mark on this ever-changing landscape. The NPCs you encountered, the battles you fought, and the friendships you forged all contribute to a world that remembers and responds to your journey.
         The realm of Ingrained stands as a testament to your courage and ingenuity, waiting for new heroes to carve their own stories. With each new adventure, the world grows richer, more vibrant, and ever more intriguing. So, as you step away from this chapter, know that the world of Ingrained will always welcome you back, ready to offer new challenges, new allies, and new tales waiting to be told.
         In this sandbox of infinite possibilities, your story is but one of many. The adventure never truly ends, and the world of Ingrained remains, forever shaped by the echoes of your deeds.
        </p>
      </div>
    </div>
  )
}

export default Ingrained
