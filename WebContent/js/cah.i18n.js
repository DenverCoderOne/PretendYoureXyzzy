/*
 * cah.i18n.js - Hebrew/English internationalisation for PretendYoureXyzzy
 *
 * Usage:
 *   cah.I18n.init()   — call once on page load; reads saved cookie preference
 *   cah.I18n.toggle() — switch between English and Hebrew
 *   cah.I18n.apply('he' | 'en') — apply a specific language
 *
 * Markup conventions
 *   data-i18n="key"              — replaces element textContent
 *   data-i18n-value="key"        — replaces <input> / <button> value attribute
 *   data-i18n-placeholder="key"  — replaces placeholder attribute
 *   data-i18n-title="key"        — replaces title attribute
 *   data-i18n-aria="key"         — replaces aria-label attribute
 */

(function (cah) {
  'use strict';

  var COOKIE_KEY = 'cah_lang';

  /* ------------------------------------------------------------------ */
  /* Translation tables                                                   */
  /* ------------------------------------------------------------------ */
  var translations = {

    en: {
      /* --- Branding / page title --- */
      page_title:                   'Pretend You\'re Xyzzy',
      logo_text:                    'Pretend You\'re Xyzzy',
      tagline:                      'A <a href="http://cardsagainsthumanity.com/">Cards Against Humanity</a> clone.',

      /* --- Welcome / nickname box --- */
      nickname_label:               'Nickname:',
      optional_id_label:            'Optional identification code:',
      optional_id_title:            'Only available via HTTPS. Provide a secret identification code to positively identify yourself in the chat.',
      help_link:                    '(Help)',
      btn_set:                      'Set',

      /* --- Privacy notice --- */
      ip_logging_notice:            'Your computer\'s IP address will <strong>always</strong> be logged when you load the game client. It is not tied in any way to your username, except possibly if a server error occurs. Gameplay results are logged permanently, but without information identifying you.',
      privacy_important:            'Hey, this is important:',
      privacy_read:                 'Read the privacy page for details about what gameplay information is collected and how it\'s shared.',

      /* --- Menubar buttons --- */
      btn_refresh_games:            'Refresh Games',
      btn_create_game:              'Create Game',
      filter_games_placeholder:     'Filter games by keyword',
      btn_leave_game:               'Leave Game',
      btn_start_game:               'Start Game',
      btn_stop_game:                'Stop Game',
      timer_label:                  'Current timer duration:',
      timer_seconds:                'seconds',
      btn_view_cards:               'View Cards',
      btn_view_cards_title:         'Open a new window to view all cards in the game.',
      btn_logout:                   'Log out',

      /* --- Bottom tabs --- */
      tab_preferences:              'User Preferences',
      tab_gamelist_filters:         'Game List Filters',
      tab_global_chat:              'Global Chat',

      /* --- Preferences tab --- */
      btn_save:                     'Save',
      btn_revert:                   'Revert',
      pref_hide_connect_quit:       'Hide connect and quit events:',
      pref_hide_connect_quit_title: 'Even with this unselected, you might not see these events if the server is configured to not send them.',
      pref_chat_ignore:             'Chat ignore list, one name per line:',
      pref_no_persistent_id:        'Opt-out of card play tracking between sessions:',
      pref_no_persistent_id_title:  'Even with this selected, your card plays for a single session will be tracked.',

      /* --- Game list filters tab --- */
      filter_refresh_note:          'You will have to click Refresh Games after saving any changes here.',
      legend_card_set_filters:      'Card set filters',
      filter_do_not_show:           'Do not show any games with these card sets:',
      filter_do_not_show_title:     'Any game which uses at least one of these card sets will not be shown in the game list.',
      filter_neutral:               'Do not require or ban these card sets:',
      filter_only_show:             'Only show games with these card sets:',
      filter_only_show_title:       'Any game that does not use all of these card sets will not be shown in the game list.',
      btn_remove_right:             'Remove \u2192',
      btn_ban:                      '\u2190 Ban',
      btn_require_right:            'Require \u2192',
      btn_remove_left:              '\u2190 Remove',

      /* --- Global chat tab --- */
      btn_chat:                     'Chat',
      chat_placeholder:             'Type here to chat.',

      /* --- Gamelist lobby template --- */
      lobby_game_suffix:            '\'s Game',
      lobby_players_label:          'Players:',
      lobby_spectators_label:       'Spectators:',
      lobby_goal_label:             'Goal:',
      lobby_cards_label:            'Cards:',
      btn_join:                     'Join',
      btn_spectate:                 'Spectate',

      /* --- Card templates --- */
      card_draw:                    'DRAW',
      card_pick:                    'PICK',

      /* --- Game template --- */
      btn_show_last_round:          'Show Last Round',
      btn_hide_game_options:        'Hide Game Options',
      game_animate_cards:           ' Animate Cards',
      game_waiting:                 'Waiting for server\u2026',
      black_card_for:               'The black card for',
      this_round_is:                'this round is',
      white_cards_played:           'The white cards played this round are:',
      prev_round_won_by:            'The previous round was won by\u00a0',
      your_hand:                    'Your Hand',
      btn_confirm_selection:        'Confirm Selection',

      /* --- Scoreboard --- */
      scoreboard_title:             'Scoreboard',
      awesome_point_title:          'Awesome Point',
      awesome_point_plural:         's',

      /* --- Previous round template --- */
      btn_close:                    'Close',
      round_winner_label:           'Round winner:\u00a0',

      /* --- Game options template --- */
      options_host_only:            'Only the game host can change options.',
      legend_game_options:          'Game options:',
      score_limit_label:            'Score limit:',
      player_limit_label:           'Player limit:',
      player_limit_note:            'Having more than 10 players may get cramped!',
      spectator_limit_label:        'Spectator limit:',
      spectator_note:               'Spectators can watch and chat, but not actually play. Not even as Czar.',
      timer_multiplier_label:       'Idle timer multiplier:',
      timer_unlimited:              'Unlimited',
      legend_card_sets:             'Card Sets',
      legend_custom_card_sets:      'Custom Card Sets',
      btn_upload_json:              'Upload JSON',
      btn_download_url:             'Download from URL',
      btn_remove_selected:          'Remove selected',
      blank_cards_include:          'Also include',
      blank_cards_suffix:           'blank white cards.',
      game_password_label:          'Game password:',
      password_apply_note:          'You must click outside the box to apply the password.',
      btn_hide_password:            'Hide password.',

      /* --- Lang toggle (opposite language name shown on button) --- */
      lang_toggle_btn:              '\u05E2\u05D1\u05E8\u05D9\u05EA', /* עברית */

      /* --- index.jsp specific --- */
      pretend_youre:                'Pretend You\'re',
      xyzzy_dfn_title:              'Xyzzy is an Artificial Unintelligence bot. You\'ll be making more sense than him in this game.',
      btn_go_to_game:               'I have read the above; Take me to the game!'
    },

    he: {
      /* --- Branding / page title --- */
      page_title:                   '\u05D4\u05EA\u05D7\u05D6\u05D4 \u05DC\u05E7\u05E1\u05D9\u05D6\u05D9',
      logo_text:                    '\u05D4\u05EA\u05D7\u05D6\u05D4 \u05DC\u05E7\u05E1\u05D9\u05D6\u05D9',
      tagline:                      '\u05E9\u05D9\u05D1\u05D5\u05D8 \u05E9\u05DC <a href="http://cardsagainsthumanity.com/">\u05E7\u05DC\u05E4\u05D9\u05DD \u05E0\u05D2\u05D3 \u05D4\u05D0\u05E0\u05D5\u05E9\u05D5\u05EA</a>.',

      /* --- Welcome / nickname box --- */
      nickname_label:               '\u05DB\u05D9\u05E0\u05D5\u05D9:',
      optional_id_label:            '\u05E7\u05D5\u05D3 \u05D6\u05D9\u05D4\u05D5\u05D9 \u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9:',
      optional_id_title:            '\u05D6\u05DE\u05D9\u05DF \u05E8\u05E7 \u05D1-HTTPS. \u05E1\u05E4\u05E7 \u05E7\u05D5\u05D3 \u05D6\u05D9\u05D4\u05D5\u05D9 \u05E1\u05D5\u05D3\u05D9 \u05DC\u05D6\u05D9\u05D4\u05D5\u05D9 \u05D7\u05D9\u05D5\u05D1\u05D9 \u05D1\u05E6\'\u05D0\u05D8.',
      help_link:                    '(\u05E2\u05D6\u05E8\u05D4)',
      btn_set:                      '\u05D0\u05D9\u05E9\u05D5\u05E8',

      /* --- Privacy notice --- */
      ip_logging_notice:            '\u05DB\u05EA\u05D5\u05D1\u05EA ה-IP \u05E9\u05DC \u05D4\u05DE\u05D7\u05E9\u05D1 \u05E9\u05DC\u05DA \u05EA\u05EA\u05D2\u05E8\u05EA <strong>\u05EA\u05DE\u05D9\u05D3</strong> \u05D1\u05E2\u05EA \u05D8\u05E2\u05D9\u05E0\u05EA \u05DC\u05E7\u05D5\u05D7 \u05D4\u05DE\u05E9\u05D7\u05E7. \u05D4\u05D9\u05D0 \u05D0\u05D9\u05E0\u05D4 \u05E7\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05DD \u05D0\u05D5\u05E4\u05DF \u05DC\u05E9\u05DD \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E9\u05DC\u05DA. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E0\u05E9\u05DE\u05E8\u05D5\u05EA \u05DC\u05E6\u05DE\u05D9\u05EA\u05D5\u05EA, \u05D0\u05DA \u05DC\u05DC\u05D0 \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D6\u05D4\u05D4 \u05D0\u05D5\u05EA\u05DA.',
      privacy_important:            '\u05D7\u05E9\u05D5\u05D1 \u05D1\u05D0\u05DE\u05EA:',
      privacy_read:                 '\u05E7\u05E8\u05D0 \u05D0\u05EA \u05D3\u05E3 \u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05D5\u05EA \u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05E2\u05DC \u05DE\u05D9\u05D3\u05E2 \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E9\u05E0\u05D0\u05E1\u05E3 \u05D5\u05D0\u05D9\u05DA \u05D4\u05D5\u05D0 \u05DE\u05E9\u05D5\u05EA\u05E3.',

      /* --- Menubar buttons --- */
      btn_refresh_games:            '\u05E8\u05E2\u05E0\u05DF \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD',
      btn_create_game:              '\u05E6\u05D5\u05E8 \u05DE\u05E9\u05D7\u05E7',
      filter_games_placeholder:     '\u05E1\u05E0\u05DF \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05DC\u05E4\u05D9 \u05DE\u05D9\u05DC\u05EA \u05DE\u05E4\u05EA\u05D7',
      btn_leave_game:               '\u05E2\u05D6\u05D5\u05D1 \u05DE\u05E9\u05D7\u05E7',
      btn_start_game:               '\u05D4\u05EA\u05D7\u05DC \u05DE\u05E9\u05D7\u05E7',
      btn_stop_game:                '\u05E2\u05E6\u05D5\u05E8 \u05DE\u05E9\u05D7\u05E7',
      timer_label:                  '\u05DE\u05E9\u05DA \u05D4\u05D8\u05D9\u05D9\u05DE\u05E8 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9:',
      timer_seconds:                '\u05E9\u05E0\u05D9\u05D5\u05EA',
      btn_view_cards:               '\u05D4\u05E6\u05D2 \u05E7\u05DC\u05E4\u05D9\u05DD',
      btn_view_cards_title:         '\u05E4\u05EA\u05D7 \u05D7\u05DC\u05D5\u05DF \u05D7\u05D3\u05E9 \u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05DB\u05DC \u05D4\u05E7\u05DC\u05E4\u05D9\u05DD \u05D1\u05DE\u05E9\u05D7\u05E7.',
      btn_logout:                   '\u05D4\u05EA\u05E0\u05EA\u05E7',

      /* --- Bottom tabs --- */
      tab_preferences:              '\u05D4\u05E2\u05D3\u05E4\u05D5\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9',
      tab_gamelist_filters:         '\u05DE\u05E1\u05E0\u05E0\u05D9 \u05E8\u05E9\u05D9\u05DE\u05EA \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD',
      tab_global_chat:              '\u05E6\'\u05D0\u05D8 \u05DB\u05DC\u05DC\u05D9',

      /* --- Preferences tab --- */
      btn_save:                     '\u05E9\u05DE\u05D5\u05E8',
      btn_revert:                   '\u05D1\u05D8\u05DC \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD',
      pref_hide_connect_quit:       '\u05D4\u05E1\u05EA\u05E8 \u05D0\u05D9\u05E8\u05D5\u05E2\u05D9 \u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05D5\u05E2\u05D6\u05D9\u05D1\u05D4:',
      pref_hide_connect_quit_title: '\u05D2\u05DD \u05D1\u05DC\u05DC\u05D0 \u05E1\u05D9\u05DE\u05D5\u05DF \u05D6\u05D4, \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05DC\u05D0 \u05EA\u05E8\u05D0\u05D4 \u05D0\u05D9\u05E8\u05D5\u05E2\u05D9\u05DD \u05D0\u05DC\u05D5 \u05D0\u05DD \u05D4\u05E9\u05E8\u05EA \u05DE\u05D5\u05D2\u05D3\u05E8 \u05DC\u05D0 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05D5\u05EA\u05DD.',
      pref_chat_ignore:             '\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05EA\u05E2\u05DC\u05DE\u05D5\u05EA \u05D1\u05E6\'\u05D0\u05D8, \u05E9\u05DD \u05D0\u05D7\u05D3 \u05D1\u05DB\u05DC \u05E9\u05D5\u05E8\u05D4:',
      pref_no_persistent_id:        '\u05D1\u05D9\u05D8\u05D5\u05DC \u05DE\u05E2\u05E7\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05E9\u05D7\u05E7 \u05E7\u05DC\u05E4\u05D9\u05DD \u05D1\u05D9\u05DF \u05E1\u05E9\u05E0\u05D9\u05DD:',
      pref_no_persistent_id_title:  '\u05D2\u05DD \u05E2\u05DD \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D6\u05D5 \u05DE\u05E1\u05D5\u05DE\u05E0\u05EA, \u05DE\u05E9\u05D7\u05E7\u05D9 \u05E7\u05DC\u05E4\u05D9\u05DD \u05D1\u05E1\u05E9\u05DF \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05E2\u05D3\u05D9\u05D9\u05DF \u05D9\u05E2\u05E7\u05D1\u05D5.',

      /* --- Game list filters tab --- */
      filter_refresh_note:          '\u05D9\u05D4\u05D9\u05D4 \u05E2\u05DC\u05D9\u05DA \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05E8\u05E2\u05E0\u05DF \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05DC\u05D0\u05D7\u05E8 \u05E9\u05DE\u05D9\u05E8\u05EA \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD.',
      legend_card_set_filters:      '\u05DE\u05E1\u05E0\u05E0\u05D9 \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD',
      filter_do_not_show:           '\u05D0\u05DC \u05EA\u05E6\u05D9\u05D2 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E2\u05DD \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD \u05D0\u05DC\u05D5:',
      filter_do_not_show_title:     '\u05DB\u05DC \u05DE\u05E9\u05D7\u05E7 \u05E9\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D7\u05EA \u05DE\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD \u05D0\u05DC\u05D5 \u05DC\u05D0 \u05D9\u05D5\u05E6\u05D2 \u05D1\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD.',
      filter_neutral:               '\u05D0\u05DC \u05EA\u05D3\u05E8\u05D5\u05E9 \u05D5\u05D0\u05DC \u05EA\u05D7\u05E1\u05D5\u05DD \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD \u05D0\u05DC\u05D5:',
      filter_only_show:             '\u05D4\u05E6\u05D2 \u05E8\u05E7 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E2\u05DD \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD \u05D0\u05DC\u05D5:',
      filter_only_show_title:       '\u05DB\u05DC \u05DE\u05E9\u05D7\u05E7 \u05E9\u05DC\u05D0 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05DC \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD \u05D0\u05DC\u05D5 \u05DC\u05D0 \u05D9\u05D5\u05E6\u05D2 \u05D1\u05E8\u05E9\u05D9\u05DE\u05D4.',
      btn_remove_right:             '\u05D4\u05E1\u05E8 \u2192',
      btn_ban:                      '\u2190 \u05D7\u05E1\u05D5\u05DD',
      btn_require_right:            '\u05D3\u05E8\u05D5\u05E9 \u2192',
      btn_remove_left:              '\u2190 \u05D4\u05E1\u05E8',

      /* --- Global chat tab --- */
      btn_chat:                     '\u05E9\u05DC\u05D7',
      chat_placeholder:             '\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF \u05DC\u05E6\'\u05D0\u05D8.',

      /* --- Gamelist lobby template --- */
      lobby_game_suffix:            ' \u05DE\u05E9\u05D7\u05E7',
      lobby_players_label:          '\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD:',
      lobby_spectators_label:       '\u05E6\u05D5\u05E4\u05D9\u05DD:',
      lobby_goal_label:             '\u05D9\u05E2\u05D3:',
      lobby_cards_label:            '\u05E7\u05DC\u05E4\u05D9\u05DD:',
      btn_join:                     '\u05D4\u05E6\u05D8\u05E8\u05E3',
      btn_spectate:                 '\u05E6\u05E4\u05D4',

      /* --- Card templates --- */
      card_draw:                    '\u05E9\u05DC\u05D5\u05E3',
      card_pick:                    '\u05D1\u05D7\u05E8',

      /* --- Game template --- */
      btn_show_last_round:          '\u05D4\u05E6\u05D2 \u05E1\u05D9\u05D1\u05D5\u05D1 \u05D0\u05D7\u05E8\u05D5\u05DF',
      btn_hide_game_options:        '\u05D4\u05E1\u05EA\u05E8 \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05DE\u05E9\u05D7\u05E7',
      game_animate_cards:           ' \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D9\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD',
      game_waiting:                 '\u05DE\u05DE\u05EA\u05D9\u05DF \u05DC\u05E9\u05E8\u05EA\u2026',
      black_card_for:               '\u05E7\u05DC\u05E3 \u05D4\u05E9\u05D7\u05D5\u05E8 \u05E2\u05D1\u05D5\u05E8',
      this_round_is:                '\u05D4\u05E1\u05D9\u05D1\u05D5\u05D1 \u05D4\u05D6\u05D4 \u05D4\u05D5\u05D0',
      white_cards_played:           '\u05E7\u05DC\u05E4\u05D9 \u05D4\u05DC\u05D1\u05DF \u05E9\u05D4\u05D5\u05E9\u05E7\u05D5 \u05D1\u05E1\u05D9\u05D1\u05D5\u05D1 \u05D6\u05D4:',
      prev_round_won_by:            '\u05D4\u05E1\u05D9\u05D1\u05D5\u05D1 \u05D4\u05E7\u05D5\u05D3\u05DD \u05E0\u05D5\u05E6\u05D7 \u05E2\u05DC \u05D9\u05D3\u05D9\u00a0',
      your_hand:                    '\u05D4\u05D9\u05D3 \u05E9\u05DC\u05DA',
      btn_confirm_selection:        '\u05D0\u05E9\u05E8 \u05D1\u05D7\u05D9\u05E8\u05D4',

      /* --- Scoreboard --- */
      scoreboard_title:             '\u05DC\u05D5\u05D7 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA',
      awesome_point_title:          '\u05E0\u05E7\u05D5\u05D3\u05D4 \u05DE\u05D3\u05D4\u05D9\u05DE\u05D4',
      awesome_point_plural:         '',

      /* --- Previous round template --- */
      btn_close:                    '\u05E1\u05D2\u05D5\u05E8',
      round_winner_label:           '\u05DE\u05E0\u05E6\u05D7 \u05D4\u05E1\u05D9\u05D1\u05D5\u05D1:\u00a0',

      /* --- Game options template --- */
      options_host_only:            '\u05E8\u05E7 \u05DE\u05D0\u05E8\u05D7 \u05D4\u05DE\u05E9\u05D7\u05E7 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA.',
      legend_game_options:          '\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05DE\u05E9\u05D7\u05E7:',
      score_limit_label:            '\u05DE\u05D2\u05D1\u05DC\u05EA \u05E0\u05D9\u05E7\u05D5\u05D3:',
      player_limit_label:           '\u05DE\u05D2\u05D1\u05DC\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD:',
      player_limit_note:            '\u05D9\u05D5\u05EA\u05E8 \u05DE-10 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05E2\u05DC\u05D5\u05DC \u05DC\u05D2\u05E8\u05D5\u05DD \u05DC\u05E6\u05E4\u05D9\u05E4\u05D5\u05EA!',
      spectator_limit_label:        '\u05DE\u05D2\u05D1\u05DC\u05EA \u05E6\u05D5\u05E4\u05D9\u05DD:',
      spectator_note:               '\u05E6\u05D5\u05E4\u05D9\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E6\u05E4\u05D5\u05EA \u05D5\u05DC\u05E9\u05D5\u05D7\u05D7, \u05D0\u05DA \u05DC\u05D0 \u05DC\u05E9\u05D7\u05E7. \u05D0\u05E4\u05D9\u05DC\u05D5 \u05DC\u05D0 \u05DB\u05E6\u05D0\u05E8.',
      timer_multiplier_label:       '\u05DE\u05DB\u05E4\u05D9\u05DC \u05D8\u05D9\u05D9\u05DE\u05E8 \u05D7\u05D5\u05E1\u05E8 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA:',
      timer_unlimited:              '\u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4',
      legend_card_sets:             '\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD',
      legend_custom_card_sets:      '\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E7\u05DC\u05E4\u05D9\u05DD \u05DE\u05D5\u05EA\u05D0\u05DE\u05D5\u05EA',
      btn_upload_json:              '\u05D4\u05E2\u05DC\u05D4 JSON',
      btn_download_url:             '\u05D4\u05D5\u05E8\u05D3 \u05DE-URL',
      btn_remove_selected:          '\u05D4\u05E1\u05E8 \u05E0\u05D1\u05D7\u05E8\u05D9\u05DD',
      blank_cards_include:          '\u05DB\u05DC\u05DC \u05D2\u05DD',
      blank_cards_suffix:           '\u05E7\u05DC\u05E4\u05D9 \u05DC\u05D1\u05DF \u05E8\u05D9\u05E7\u05D9\u05DD.',
      game_password_label:          '\u05E1\u05D9\u05E1\u05DE\u05EA \u05DE\u05E9\u05D7\u05E7:',
      password_apply_note:          '\u05E2\u05DC\u05D9\u05DA \u05DC\u05DC\u05D7\u05D5\u05E5 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05EA\u05D9\u05D1\u05D4 \u05DC\u05D4\u05D7\u05D9\u05DC \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4.',
      btn_hide_password:            '\u05D4\u05E1\u05EA\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4.',

      /* --- Lang toggle --- */
      lang_toggle_btn:              'English',

      /* --- index.jsp specific --- */
      pretend_youre:                '\u05D4\u05EA\u05D7\u05D6\u05D4 \u05DC',
      xyzzy_dfn_title:              '\u05E7\u05E1\u05D9\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05D5\u05D8 \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E2\u05DC\u05D9\u05D5\u05DC\u05EA\u05D9. \u05EA\u05D4\u05D9\u05D4 \u05D4\u05D2\u05D9\u05D5\u05E0\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DE\u05E0\u05D5.',
      btn_go_to_game:               '\u05E7\u05E8\u05D0\u05EA\u05D9 \u05D0\u05EA \u05D4\u05E0\u05D3\u05E8\u05E9; \u05E7\u05D7 \u05D0\u05D5\u05EA\u05D9 \u05DC\u05DE\u05E9\u05D7\u05E7!'
    }
  };

  /* ------------------------------------------------------------------ */
  /* Module                                                               */
  /* ------------------------------------------------------------------ */
  var I18n = {
    currentLang: 'en',

    /** Read saved cookie and apply the stored language (or default to English). */
    init: function () {
      var saved = (typeof $.cookie === 'function') ? $.cookie(COOKIE_KEY) : null;
      this.apply(saved === 'he' ? 'he' : 'en');
    },

    /** Flip between English and Hebrew. */
    toggle: function () {
      this.apply(this.currentLang === 'en' ? 'he' : 'en');
    },

    /**
     * Apply the given language immediately.
     * @param {string} lang  'en' or 'he'
     */
    apply: function (lang) {
      if (!translations[lang]) { lang = 'en'; }
      this.currentLang = lang;

      /* Persist choice */
      if (typeof $.cookie === 'function') {
        $.cookie(COOKIE_KEY, lang, { expires: 365, path: '/' });
      }

      var t   = translations[lang];
      var rtl = (lang === 'he');

      /* RTL / LTR on the root element */
      var $html = $('html');
      $html.attr('dir', rtl ? 'rtl' : 'ltr');
      $html.attr('lang', lang);

      /* Update <title> */
      if (t.page_title) { document.title = t.page_title; }

      /* textContent replacement */
      $('[data-i18n]').each(function () {
        var key = $(this).attr('data-i18n');
        if (t[key] !== undefined) {
          $(this).text(t[key]);
        }
      });

      /* <input> / <button> value replacement */
      $('[data-i18n-value]').each(function () {
        var key = $(this).attr('data-i18n-value');
        if (t[key] !== undefined) {
          $(this).val(t[key]);
        }
      });

      /* placeholder replacement */
      $('[data-i18n-placeholder]').each(function () {
        var key = $(this).attr('data-i18n-placeholder');
        if (t[key] !== undefined) {
          $(this).attr('placeholder', t[key]);
        }
      });

      /* title attribute replacement */
      $('[data-i18n-title]').each(function () {
        var key = $(this).attr('data-i18n-title');
        if (t[key] !== undefined) {
          $(this).attr('title', t[key]);
        }
      });

      /* aria-label replacement */
      $('[data-i18n-aria]').each(function () {
        var key = $(this).attr('data-i18n-aria');
        if (t[key] !== undefined) {
          $(this).attr('aria-label', t[key]);
        }
      });

      /* innerHTML replacement (safe for static trusted markup only) */
      $('[data-i18n-html]').each(function () {
        var key = $(this).attr('data-i18n-html');
        if (t[key] !== undefined) {
          $(this).html(t[key]);
        }
      });

      /* Update the toggle button label to name the *other* language */
      $('#lang_toggle').text(t.lang_toggle_btn);
    }
  };

  cah.I18n = I18n;

})(window.cah = window.cah || {});
