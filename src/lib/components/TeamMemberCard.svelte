<script type="ts">
  import type { TeamMembers } from "$lib/types/team-members.interface";

  export let teamMember: TeamMembers;
</script>

<div class="members-wrapper">
  <div class="card-wrapper">
    <div class="card-effect">
      <div class="card-content">
        <h4 class="on-background-text title title-large">
          {teamMember.name}
        </h4>
        <img class="profile-pic" src={teamMember.url} alt={teamMember.name} />
        <p class="on-background-text">{teamMember.description}</p>
        <div class="socialmedia-wrapper">
          {#each teamMember.socialMedias as socialMedia}
            <a href={socialMedia.url} target="_blank">
              <img
                class="socialmedia-icon"
                src={socialMedia.icon}
                alt={socialMedia.name}
              />
            </a>
          {/each}
        </div>
      </div>
    </div>
    <div class="card-background-effect" />
  </div>
</div>

<style lang="scss">
  .members-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: space-around;

    @include mq("medium") {
      display: flex;
      flex-direction: row;
      gap: 4rem;
    }

    .card-wrapper {
      width: 300px;
      height: 500px;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      border-radius: 0.4rem;
    }

    .card-effect {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding: 2rem;
      justify-content: center;
      background-color: var(--md-sys-color-background);
      width: 298px;
      height: 498px;
      border-radius: 0.4rem;
    }

    .card-background-effect {
      background: radial-gradient(ellipse at top, #fff 10%, transparent),
        radial-gradient(ellipse at bottom, #000, #000);
      min-width: 600px !important;
      height: 600px;
      animation: rotate 4s linear infinite;
      z-index: -1;
      position: absolute;
      border-radius: 0.4rem;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;
      text-align: center;

      .profile-pic {
        border-radius: 0.5rem;
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .socialmedia-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .socialmedia-icon {
        aspect-ratio: 1/1;
        max-width: 1.7rem;
        filter: brightness(100);
      }
    }

    .socialmedia-wrapper:hover {
      cursor: pointer;
    }
  }
</style>
