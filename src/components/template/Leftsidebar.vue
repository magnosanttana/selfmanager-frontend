<template>
  <div>
      <section>
        <!-- Left Sidebar -->
        <aside id="leftsidebar" class="sidebar">
            <!-- User Info -->
            <div class="user-info">
                <div class="image">
                    <img src="@/assets/images/user.png" width="48" height="48" alt="User" />
                </div>
                <div class="info-container">
                    <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Magno Santtana</div>
                    <div class="email">contato@magnosanttana.com.br</div>
                    <div class="btn-group user-helper-dropdown">
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul class="dropdown-menu pull-right">
                            <li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>
                             <li role="separator" class="divider"></li>
                            <li><a href="javascript:void(0);"><i class="material-icons">input</i>Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- #User Info -->
            <!-- Menu -->
            <div class="menu">
                <ul class="list">
                    <li class="header">NAVEGAÇÃO PRINCIPAL</li>
                    <li>
                       
                        <router-link to="/"> 
                            <i class="material-icons">home</i>
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dentistas"> 
                            <i class="material-icons">contacts</i>
                            <span>Dentistas</span>
                        </router-link>
                    </li>
                   
                </ul>
            </div>
            <!-- #Menu -->
            <!-- Footer -->
            <div class="legal">
                <div class="copyright">
                    &copy; 2020 <a href="javascript:void(0);">Processo seletivo Self Manager</a>.
                </div>
               <!--<div class="version">
                    <b>Version: </b> 1.0.0
                </div> -->
            </div>
            <!-- #Footer -->
        </aside>
        <!-- #END# Left Sidebar -->
    </section>
  </div>
</template>

<script>
export default {
    name: 'Leftsidebar'

}
</script>

<style>

</style>