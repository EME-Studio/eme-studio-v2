<script type="ts">
  export let comment: string;
  export let img: string;
  export let username: string;
  export let name: string;
</script>

<div class="main-wrapper inverse-on-surface card">
  <p class="title-large">{comment}</p>
  <div class="data">
    <img src={img} alt="avatar" class="image" />
    <div class="name">
      <p>{name}</p>
      <p>{username}</p>
    </div>
  </div>
</div>

<style type="scss">
  .main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 1rem;
    margin: 6rem 0 0 0;

    .data {
      display: flex;
      flex-direction: row;
      align-items: center;

      .name {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: 1rem;
        gap: 0.5rem;

        p {
          margin: 0;
        }
      }

      .image {
        max-width: 5rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
    }
  }
</style>
