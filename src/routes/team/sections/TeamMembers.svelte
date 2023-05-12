<script type="ts">
  import TeamMemberCard from "$lib/components/TeamMemberCard.svelte";
  import { TEAM_MEMBERS } from "$lib/config/homePageData";
</script>

<section class="container">
  <div class="members-wrapper">
    {#each TEAM_MEMBERS as member}
      <TeamMemberCard teamMember={member} />
    {/each}
  </div>
</section>

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
  }
</style>
