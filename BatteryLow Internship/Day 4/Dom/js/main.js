const milestonesData = JSON.parse(data).data;

// load course milestones data
function loadMilestones() {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      return `<div class="milestone border-b" id="${milestone._id}">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
          milestone._id
        })" /></div>
        <div onclick="openMilestone(this, ${milestone._id})">
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
        ${milestone.modules
          .map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
          })
          .join("")}
      </div>
    </div>`;
    })
    .join("")}`;
}