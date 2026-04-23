<?xml version="1.0" encoding="UTF-8" ?>
<%--
Copyright (c) 2012-2020, Andy Janata
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions
  and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of
  conditions and the following disclaimer in the documentation and/or other materials provided
  with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
--%>
<%--
The main game page. This is almost entirely static HTML, other than ensuring that a session is
created for the user now.

@author Andy Janata (ajanata@socialgamer.net)
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.google.inject.Injector" %>
<%@ page import="com.google.inject.Key" %>
<%@ page import="com.google.inject.TypeLiteral" %>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<%@ page import="net.socialgamer.cah.RequestWrapper" %>
<%@ page import="net.socialgamer.cah.StartupUtils" %>
<%@ page import="net.socialgamer.cah.data.GameOptions" %>
<%@ page import="net.socialgamer.cah.CahModule" %>
<%@ page import="net.socialgamer.cah.CahModule.*" %>
<%
// Ensure a session exists for the user.
@SuppressWarnings("unused")
HttpSession hSession = request.getSession(true);
RequestWrapper wrapper = new RequestWrapper(request);
ServletContext servletContext = pageContext.getServletContext();
Injector injector = (Injector) servletContext.getAttribute(StartupUtils.INJECTOR);
boolean allowBlankCards = injector.getInstance(Key.get(new TypeLiteral<Boolean>(){}, AllowBlankCards.class));
boolean customDecksEnabled = injector.getInstance(Key.get(new TypeLiteral<Boolean>(){}, CustomDecksEnabled.class));
boolean showAddCustomDeckUrl = injector.getInstance(Key.get(new TypeLiteral<Boolean>(){}, ShowAddCustomDeckUrl.class));
boolean showAddCustomDeckJson = injector.getInstance(Key.get(new TypeLiteral<Boolean>(){}, ShowAddCustomDeckJson.class));
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Pretend You're Xyzzy</title>
    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-migrate-1.2.1.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/jquery.json.js"></script>
    <script type="text/javascript" src="js/QTransform.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/cah.js"></script>
    <script type="text/javascript" src="js/cah.config.js"></script>
    <%-- cah must be first, ajax must be before app. app probably has to be last. --%>
    <%-- TODO make this be dynamic with looking at the filesystem and using jquery --%>
    <%-- except that is nontrivial thanks to dependency ordering -_- --%>
    <script type="text/javascript" src="js/cah.constants.js"></script>
    <script type="text/javascript" src="js/cah.log.js"></script>
    <script type="text/javascript" src="js/cah.gamelist.js"></script>
    <script type="text/javascript" src="js/cah.card.js"></script>
    <script type="text/javascript" src="js/cah.cardset.js"></script>
    <script type="text/javascript" src="js/cah.game.js"></script>
    <script type="text/javascript" src="js/cah.preferences.js"></script>
    <script type="text/javascript" src="js/cah.longpoll.js"></script>
    <script type="text/javascript" src="js/cah.longpoll.handlers.js"></script>
    <script type="text/javascript" src="js/cah.ajax.js"></script>
    <script type="text/javascript" src="js/cah.ajax.builder.js"></script>
    <script type="text/javascript" src="js/cah.ajax.handlers.js"></script>
    <script type="text/javascript" src="js/cah.app.js"></script>
    <script type="text/javascript" src="js/cah.i18n.js"></script>
    <link rel="stylesheet" type="text/css" href="cah.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="jquery-ui.min.css" media="screen"/>
    <jsp:include page="analytics.jsp"/>
</head>
<body id="gamebody">

<div id="welcome">
  <button class="lang_toggle" onclick="cah.I18n.toggle()" title="Switch language / החלף שפה">עברית</button>

  <h1 tabindex="0">
    Pretend You're <dfn
    title="Xyzzy is an Artificial Unintelligence bot. You'll be making more sense than him in this game.">
    Xyzzy</dfn>
  </h1>
  <h3 data-i18n-html="tagline">A <a href="http://cardsagainsthumanity.com/">Cards Against Humanity</a> clone.</h3>
  <p data-i18n-html="ip_logging_notice">
    Your computer's IP address will <strong>always</strong> be logged when you load the game client.
    It is not tied in any way to your username, except possibly if a server error occurs. Gameplay
    results are logged permanently, but without information identifying you.
  </p>
  <div id="nickbox">
    <label for="nickname" data-i18n="nickname_label">Nickname:</label>
    <input type="text" id="nickname" value="" maxlength="30" role="textbox"
        aria-label="Enter your nickname." data-lpignore="true" />
    <label for="idcode">
    <dfn title="Only available via HTTPS. Provide a secret identification code to positively identify yourself in the chat."
        data-i18n="optional_id_label"
        data-i18n-title="optional_id_title">
    Optional identification code:</dfn></label>
    <input type="password" id="idcode" value="" maxlength="100" disabled="disabled"
        aria-label="Optionally enter an identification code." />
    <a href="https://github.com/ajanata/PretendYoureXyzzy/wiki/Identification-Codes" data-i18n="help_link">(Help)</a>
    <input type="button" id="nicknameconfirm" value="Set" data-i18n-value="btn_set" />
    <span id="nickbox_error" class="error"></span>
  </div>
  <p><a href="privacy.html"><strong data-i18n="privacy_important">Hey, this is important:</strong> <span data-i18n="privacy_read">Read the privacy page for details about what gameplay information is collected and how it's shared.</span></a></p>
  <p>
    Pretend You're Xyzzy is a Cards Against Humanity clone, which is available at
    <a href="http://www.cardsagainsthumanity.com/">cardsagainsthumanity.com</a>, where you can buy
    it or download and print it out yourself. It is distributed under a
    <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons - Attribution -
    Noncommercial - Share Alike license</a>. This web version is in no way endorsed or sponsored by
    cardsagainsthumanity.com. You may download the source code to this version from
    <a href="https://github.com/devgianlu/PretendYoureXyzzy">GitHub</a>. For full license
    information, including information about included libraries, see the
    <a href="license.html">full license information</a>.
  </p>
</div>

<div id="canvas" class="hide">
    <div id="menubar">
        <div id="menubar_left">
            <input type="button" id="refresh_games" class="hide" value="Refresh Games" data-i18n-value="btn_refresh_games"/>
            <input type="button" id="create_game" class="hide" value="Create Game" data-i18n-value="btn_create_game"/>
            <input type="text" id="filter_games" class="hide" placeholder="Filter games by keyword"
                   data-i18n-placeholder="filter_games_placeholder" data-lpignore="true"/>

            <input type="button" id="leave_game" class="hide" value="Leave Game" data-i18n-value="btn_leave_game"/>
            <input type="button" id="start_game" class="hide" value="Start Game" data-i18n-value="btn_start_game"/>
            <input type="button" id="stop_game" class="hide" value="Stop Game" data-i18n-value="btn_stop_game"/>
        </div>
        <div id="menubar_right">
            <span data-i18n="timer_label">Current timer duration:</span> <span id="current_timer">0</span> <span data-i18n="timer_seconds">seconds</span>
            <input type="button" id="view_cards" value="View Cards"
                   title="Open a new window to view all cards in the game."
                   data-i18n-value="btn_view_cards" data-i18n-title="btn_view_cards_title"
                   onclick="window.open('viewcards.jsp', 'viewcards');"/>
            <input type="button" id="logout" value="Log out" data-i18n-value="btn_logout"/>
            <button class="lang_toggle" onclick="cah.I18n.toggle()" title="Switch language / החלף שפה">עברית</button>
        </div>
    </div>
    <div id="main">
        <div id="game_list" class="hide">
        </div>
        <div id="main_holder">
        </div>
    </div>
</div>
<div id="bottom" class="hide">
    <div id="info_area">
    </div>
    <div id="tabs">
        <ul>
            <li><a href="#tab-preferences" class="tab-button" data-i18n="tab_preferences">User Preferences</a></li>
            <li><a href="#tab-gamelist-filters" class="tab-button" data-i18n="tab_gamelist_filters">Game List Filters</a></li>
            <li><a href="#tab-global" class="tab-button" id="button-global" data-i18n="tab_global_chat">Global Chat</a></li>
        </ul>
        <div id="tab-preferences">
            <input type="button" value="Save" onclick="cah.Preferences.save();" data-i18n-value="btn_save"/>
            <input type="button" value="Revert" onclick="cah.Preferences.load();" data-i18n-value="btn_revert"/>
            <label for="hide_connect_quit">
                <dfn
                        title="Even with this unselected, you might not see these events if the server is configured to not send them."
                        data-i18n="pref_hide_connect_quit"
                        data-i18n-title="pref_hide_connect_quit_title">
                    Hide connect and quit events:
                </dfn>
            </label>
            <input type="checkbox" id="hide_connect_quit"/>
            <br/>
            <label for="ignore_list" data-i18n="pref_chat_ignore">Chat ignore list, one name per line:</label>
            <br/>
            <textarea id="ignore_list" style="width: 200px; height: 150px"></textarea>
            <br/>
            <label for="no_persistent_id">
                <dfn title="Even with this selected, your card plays for a single session will be tracked."
                    data-i18n="pref_no_persistent_id"
                    data-i18n-title="pref_no_persistent_id_title">
                    Opt-out of card play tracking between sessions:
                </dfn>
            </label>
            <input type="checkbox" id="no_persistent_id"/>
        </div>
        <div id="tab-gamelist-filters">
            <span data-i18n="filter_refresh_note">You will have to click Refresh Games after saving any changes here.</span>
            <div style="text-align: right; width:100%">
                <input type="button" value="Save" onclick="cah.Preferences.save();" data-i18n-value="btn_save"/>
                <input type="button" value="Revert" onclick="cah.Preferences.load();" data-i18n-value="btn_revert"/>
            </div>
            <fieldset>
                <legend data-i18n="legend_card_set_filters">Card set filters</legend>
                <div class="cardset_filter_list">
          <span title="Any game which uses at least one of these card sets will not be shown in the game list."
              data-i18n="filter_do_not_show"
              data-i18n-title="filter_do_not_show_title">
            Do not show any games with these card sets:
          </span>
                    <select id="cardsets_banned" multiple="multiple"></select>
                    <div class="buttons">
                        <input type="button" id="banned_remove" value="Remove --&gt;"
                               data-i18n-value="btn_remove_right"
                               onclick="cah.Preferences.transferCardSets('banned', 'neutral')"/>
                    </div>
                </div>
                <div class="cardset_filter_list">
                    <span data-i18n="filter_neutral">Do not require or ban these card sets:</span>
                    <select id="cardsets_neutral" multiple="multiple"></select>
                    <div class="buttons">
                        <input type="button" id="banned_add" value="&lt;-- Ban"
                               data-i18n-value="btn_ban"
                               onclick="cah.Preferences.transferCardSets('neutral', 'banned')"/>
                        <input type="button" id="required_add" value="Require --&gt;"
                               data-i18n-value="btn_require_right"
                               onclick="cah.Preferences.transferCardSets('neutral', 'required')"/>
                    </div>
                </div>
                <div class="cardset_filter_list">
          <span title="Any game that does not use all of these card sets will not be shown in the game list."
              data-i18n="filter_only_show"
              data-i18n-title="filter_only_show_title">
            Only show games with these card sets:
          </span>
                    <select id="cardsets_required" multiple="multiple"></select>
                    <div class="buttons">
                        <input type="button" id="required_remove" value="&lt;-- Remove"
                               data-i18n-value="btn_remove_left"
                               onclick="cah.Preferences.transferCardSets('required', 'neutral')"/>
                    </div>
                </div>
            </fieldset>
        </div>
        <div id="tab-global">
            <div class="log"></div>
            <input type="text" class="chat" maxlength="200" aria-label="Type here to chat."
                   data-i18n-placeholder="chat_placeholder" data-i18n-aria="chat_placeholder"
                   data-lpignore="true"/>
            <input type="button" class="chat_submit" value="Chat" data-i18n-value="btn_chat"/>
        </div>
    </div>
</div>

<!-- Template for game lobbies in the game list. -->
<div class="hide">
    <div id="gamelist_lobby_template" class="gamelist_lobby" tabindex="0">
        <div class="gamelist_lobby_left">
            <h3>
                <span class="gamelist_lobby_host">host</span>'s Game
                (<span class="gamelist_lobby_player_count"></span>/<span class="gamelist_lobby_max_players"></span>,
                <span class="gamelist_lobby_spectator_count"></span>/<span class="gamelist_lobby_max_spectators"></span>)
                <span class="gamelist_lobby_status">status</span>
            </h3>
            <div>
                <strong data-i18n="lobby_players_label">Players:</strong>
                <span class="gamelist_lobby_players">host, player1, player2</span>
            </div>
            <div>
                <strong data-i18n="lobby_spectators_label">Spectators:</strong>
                <span class="gamelist_lobby_spectators">spectator1</span>
            </div>
            <div><strong data-i18n="lobby_goal_label">Goal:</strong> <span class="gamelist_lobby_goal"></span></div>
            <div>
                <strong data-i18n="lobby_cards_label">Cards:</strong> <span class="gamelist_lobby_cardset"></span>
            </div>
            <div class="hide">Game <span class="gamelist_lobby_id">###</span></div>
        </div>
        <div class="gamelist_lobby_right">
            <input type="button" class="gamelist_lobby_join" value="Join" data-i18n-value="btn_join"/>
            <input type="button" class="gamelist_lobby_spectate" value="Spectate" data-i18n-value="btn_spectate"/>
        </div>
    </div>
</div>

<!-- Template for face-up black cards. -->
<div class="hide">
    <div id="black_up_template" class="card blackcard">
        <span class="card_text">The quick brown fox jumped over the lazy dog.</span>
        <div class="logo">
            <div class="logo_1 logo_element">
            </div>
            <div class="logo_2 logo_element">
            </div>
            <div class="logo_3 logo_element watermark_container">
                <br/>
                <span class="watermark"></span>
            </div>
            <div class="logo_text" data-i18n="logo_text">Pretend You're Xyzzy</div>
        </div>
        <div class="card_metadata">
            <div class="draw hide"><span data-i18n="card_draw">DRAW</span>
                <div class="card_number"></div>
            </div>
            <div class="pick hide"><span data-i18n="card_pick">PICK</span>
                <div class="card_number"></div>
            </div>
        </div>
    </div>
</div>

<!-- Template for face-down black cards. -->
<div class="hide">
    <div id="black_down_template" class="card blackcard">
    </div>
</div>

<!-- Template for face-up white cards. -->
<div class="hide">
    <div id="white_up_template" class="card whitecard">
        <span class="card_text" role="button" tabindex="0">The quick brown fox jumped over the lazy dog.</span>
        <div class="logo">
            <div class="logo_1 logo_element">
            </div>
            <div class="logo_2 logo_element">
            </div>
            <div class="logo_3 logo_element watermark_container">
                <br/>
                <span class="watermark"></span>
            </div>
            <div class="logo_text" data-i18n="logo_text">Pretend You're Xyzzy</div>
        </div>
    </div>
</div>

<!-- Template for face-down white cards. -->
<div class="hide">
    <div id="white_down_template" class="card whitecard">
    </div>
</div>

<!-- Template for game lobbies. We have a holder here for designing only. -->
<div style="width: 1000px; height: 506px; border: 1px solid black; position: relative;"
     class="hide">
    <div id="game_template" class="game">
        <div class="game_top">
            <input type="button" class="game_show_last_round game_menu_bar" value="Show Last Round"
                   data-i18n-value="btn_show_last_round" disabled="disabled"/>
            <input type="button" class="game_show_options game_menu_bar" value="Hide Game Options" data-i18n-value="btn_hide_game_options"/>
            <label class="game_menu_bar checkbox"><input type="checkbox" class="game_animate_cards"
                                                         checked="checked"/><span data-i18n="game_animate_cards"> Animate Cards</span></label>
            <div class="game_message" role="status">
                <span data-i18n="game_waiting">Waiting for server...</span>
            </div>
        </div>
        <div style="width:100%; height:472px;">
            <div style="width:100%; height:100%;">
                <div class="game_left_side">
                    <div class="game_black_card_wrapper">
            <span tabindex="0"><span data-i18n="black_card_for">The black card for</span>
                <span class="game_black_card_round_indicator" data-i18n="this_round_is">this round is</span>:
            </span>
                        <div class="game_black_card" tabindex="0">
                        </div>
                    </div>
                    <input type="button" class="confirm_card" value="Confirm Selection" data-i18n-value="btn_confirm_selection"/>
                </div>
                <div class="game_options">
                </div>
                <div class="game_right_side hide">
                    <div class="game_right_side_box game_white_card_wrapper">
                        <span tabindex="0" data-i18n="white_cards_played">The white cards played this round are:</span>
                        <div class="game_white_cards game_right_side_cards">
                        </div>
                    </div>
                    <div class="game_right_side_box game_last_round hide">
                        <span data-i18n="prev_round_won_by">The previous round was won by&#160;</span><span class="game_last_round_winner"></span>.
                        <div class="game_last_round_cards game_right_side_cards">
                        </div>
                    </div>
                </div>
            </div>
            <div class="game_hand">
                <div class="game_hand_filter hide">
                    <span class="game_hand_filter_text"></span>
                </div>
                <span class="your_hand" tabindex="0" data-i18n="your_hand">Your Hand</span>
                <div class="game_hand_cards">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Template for scoreboard container. Holder for design. -->
<div style="height: 215px; border: 1px solid black;" class="hide">
    <div id="scoreboard_template" class="scoreboard">
        <div class="game_message" tabindex="0" data-i18n="scoreboard_title">Scoreboard</div>
    </div>
</div>

<!-- Template for scoreboard score card. Holder for design. -->
<div class="scoreboard hide" style="height: 215px;">
    <div id="scorecard_template" class="scorecard" tabindex="0">
        <span class="scorecard_player">PlayerName</span>
        <div class="clear"></div>
        <span class="scorecard_points"><span class="scorecard_score">0</span> <span class="scorecard_point_title" data-i18n="awesome_point_title">Awesome Point<span
                class="scorecard_s" data-i18n="awesome_point_plural">s</span></span></span>
        <span class="scorecard_status">Status</span>
    </div>
</div>

<!-- Template for round card set binder. -->
<div class="hide">
    <div id="game_white_cards_binder_template" class="game_white_cards_binder hide">
    </div>
</div>

<!-- Previous round display. -->
<div class="hide">
    <div id="previous_round_template" class="previous_round">
        <input type="button" class="previous_round_close" value="Close" data-i18n-value="btn_close"/>
        <span data-i18n="round_winner_label">Round winner:&#160;</span><span class="previous_round_winner"></span>
        <div class="previous_round_cards"></div>
    </div>
</div>

<!-- Template for game options. -->
<div class="hide">
  <div class="game_options" id="game_options_template">
    <span class="options_host_only" data-i18n="options_host_only">Only the game host can change options.</span>
    <br/><br/>
    <fieldset>
      <legend data-i18n="legend_game_options">Game options:</legend>
      <label id="score_limit_template_label" for="score_limit_template" data-i18n="score_limit_label">Score limit:</label>
      <select id="score_limit_template" class="score_limit">
        <%
          for (int i = injector.getInstance(Key.get(Integer.class, MinScoreLimit.class)); i <= injector.getInstance(Key.get(Integer.class, MaxScoreLimit.class)); i++) {
        %>
          <option <%=(i == injector.getInstance(Key.get(Integer.class, DefaultScoreLimit.class))) ? "selected='selected' " : "" %>value="<%= i %>"><%= i %></option>
        <% } %>
      </select>
      <br/>
      <label id="player_limit_template_label" for="player_limit_template" data-i18n="player_limit_label">Player limit:</label>
      <select id="player_limit_template" class="player_limit"
          aria-label="Player limit. Having more than 10 players may cause issues both for screen readers and traditional browsers.">
        <%
          for (int i = injector.getInstance(Key.get(Integer.class, MinPlayerLimit.class)); i <= injector.getInstance(Key.get(Integer.class, MaxPlayerLimit.class)); i++) {
        %>
          <option <%= i == injector.getInstance(Key.get(Integer.class, DefaultPlayerLimit.class)) ? "selected='selected' " : "" %>value="<%= i %>"><%= i %></option>
        <% } %>
      </select>
      <span data-i18n="player_limit_note">Having more than 10 players may get cramped!</span>
      <br/>
      <label id="spectator_limit_template_label" for="spectator_limit_template" data-i18n="spectator_limit_label">Spectator limit:</label>
      <select id="spectator_limit_template" class="spectator_limit"
          aria-label="Spectator limit.">
        <%
          for (int i = injector.getInstance(Key.get(Integer.class, MinSpectatorLimit.class)); i <= injector.getInstance(Key.get(Integer.class, MaxSpectatorLimit.class)); i++) {
        %>
          <option <%= i == injector.getInstance(Key.get(Integer.class, DefaultSpectatorLimit.class)) ? "selected='selected' " : "" %>value="<%= i %>"><%= i %></option>
        <% } %>
      </select>
      <span data-i18n="spectator_note">Spectators can watch and chat, but not actually play. Not even as Czar.</span>
      <br/>
      <label id="timer_multiplier_template_label" for="timer_multiplier_template"
          title="Players will be skipped if they have not played within a reasonable amount of time. This is the multiplier to apply to the default timeouts, or Unlimited to disable timeouts.">
          <span data-i18n="timer_multiplier_label">Idle timer multiplier:</span>
      </label>
      <select id="timer_multiplier_template" class="timer_multiplier"
          title="Players will be skipped if they have not played within a reasonable amount of time. This is the multiplier to apply to the default timeouts, or Unlimited to disable timeouts."
          aria-label="Players will be skipped if they have not played within a reasonable amount of time. This is the multiplier to apply to the default timeouts, or Unlimited to disable timeouts.">
      	<option value="0.25x">0.25x</option>
      	<option value="0.5x">0.5x</option>
      	<option value="0.75x">0.75x</option>
      	<option selected="selected" value="1x">1x</option>
      	<option value="1.25x">1.25x</option>
      	<option value="1.5x">1.5x</option>
      	<option value="1.75x">1.75x</option>
      	<option value="2x">2x</option>
      	<option value="2.5x">2.5x</option>
      	<option value="3x">3x</option>
      	<option value="4x">4x</option>
      	<option value="5x">5x</option>
      	<option value="10x">10x</option>
      	<option value="Unlimited" data-i18n="timer_unlimited">Unlimited</option>
      </select>
      <br/>
      <div style="display: flex">
        <fieldset class="card_sets">
          <legend data-i18n="legend_card_sets">Card Sets</legend>
          <span class="base_card_sets"></span>
          <span class="extra_card_sets"></span>
        </fieldset>
        <% if (customDecksEnabled) { %>
          <fieldset>
            <legend data-i18n="legend_custom_card_sets">Custom Card Sets</legend>
            <% if (showAddCustomDeckJson) { %>
              <input type="button" class="add_custom_deck_json skip_changed" value="Upload JSON" data-i18n-value="btn_upload_json"/>
            <% } %>

            <% if (showAddCustomDeckUrl) { %>
              <input type="button" class="add_custom_deck_url skip_changed" value="Download from URL" data-i18n-value="btn_download_url"/>
            <% } %>

            <input type="button" class="remove_selected_custom_deck skip_changed" value="Remove selected" data-i18n-value="btn_remove_selected"/>
            <select class="custom_decks_list skip_changed" multiple="multiple">
            </select>
        </fieldset>
        <% } %>
      </div>
      <% if (allowBlankCards) { %>
        <br/>
        <label id="blanks_limit_label" title="Blank cards allow a player to type in their own answer.">
          <span data-i18n="blank_cards_include">Also include</span> <select id="blanks_limit_template" class="blanks_limit">
          <%
            for (int i = injector.getInstance(Key.get(Integer.class, MinBlankCardLimit.class)); i <= injector.getInstance(Key.get(Integer.class, MaxBlankCardLimit.class)); i++) {
          %>
            <option <%= i == injector.getInstance(Key.get(Integer.class, DefaultBlankCardLimit.class)) ? "selected='selected' " : "" %>value="<%= i %>"><%= i %></option>
          <% } %>
          </select> <span data-i18n="blank_cards_suffix">blank white cards.</span>
        </label>
      <% } %>
      <br/>
      <label id="game_password_template_label" for="game_password_template" data-i18n="game_password_label">Game password:</label>
      <input type="text" id="game_password_template" class="game_password"
          aria-label="Game password. You must tab outside of the box to apply the password."/>
      <input type="password" id="game_fake_password_template" class="game_fake_password hide" />
      <span data-i18n="password_apply_note">You must click outside the box to apply the password.</span>
      <input type="checkbox" id="game_hide_password_template" class="game_hide_password" />
      <label id="game_hide_password_template_label" for="game_hide_password_template"
          aria-label="Hide password from your screen."
          title="Hides the password from your screen, so people watching your stream can't see it."
          data-i18n="btn_hide_password">
        Hide password.
      </label>
    </fieldset>
  </div>
</div>
<div style="position:absolute; left:-99999px" role="alert" id="aria-notifications"></div>
<script type="text/javascript">
  $(document).ready(function() { cah.I18n.init(); });
</script>
</body>
</html>
