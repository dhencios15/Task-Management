<template>
  <div class="q-pa-md">
    <q-btn
        to="/settings"
        flat
        color="primary"
        icon="chevron_left"
        label="Back"
        class="q-mb-md" />
    <q-layout view="lHh Lpr lFf" container style="height: 600px" class="shadow-2 rounded-borders">
      
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            <strong>About</strong> - Task Management
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <p><b>Task Management</b></p>
          <p>is the process of managing a task through its life cycle. It involves planning, testing, tracking, and reporting. Task management can help either individual achieve goals, or groups of individuals collaborate and share knowledge for the accomplishment of collective goals. Tasks are also differentiated by complexity, from low to high.

Effective task management requires managing all aspects of a task, including its status, priority, time, human and financial resources assignments, recurrence, dependency, notifications and so on. These can be lumped together broadly into the basic activities of task management.

Managing multiple individuals or team tasks may be assisted by specialized software, for example workflow or project management software. In fact, many people[who?] believe that task management should serve as a foundation for project management activities.

Task management may form part of project management and process management and can serve as the foundation for efficient workflow in an organization. Project managers adhering to task-oriented management have a detailed and up-to-date project schedule, and are usually good at directing team members and moving the project forward.</p>

          
          

          <!-- place QPageScroller at end of page -->
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  
}
</script>
