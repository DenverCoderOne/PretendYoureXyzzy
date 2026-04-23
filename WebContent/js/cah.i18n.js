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
      btn_remove_right:             'Remove →',
      btn_ban:                      '← Ban',
      btn_require_right:            'Require →',
      btn_remove_left:              '← Remove',

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
      game_waiting:                 'Waiting for server…',
      black_card_for:               'The black card for',
      this_round_is:                'this round is',
      white_cards_played:           'The white cards played this round are:',
      prev_round_won_by:            'The previous round was won by ',
      your_hand:                    'Your Hand',
      btn_confirm_selection:        'Confirm Selection',

      /* --- Scoreboard --- */
      scoreboard_title:             'Scoreboard',
      awesome_point_title:          'Awesome Point',
      awesome_point_plural:         's',
      /* --- Game chat tab --- */
      chat_with_game_members:       'Chat with game members',
      /* --- Previous round template --- */
      btn_close:                    'Close',
      round_winner_label:           'Round winner: ',

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
      lang_toggle_btn:              'עברית', /* עברית */

      /* --- index.jsp specific --- */
      pretend_youre:                'Pretend You\'re',
      xyzzy_dfn_title:              'Xyzzy is an Artificial Unintelligence bot. You\'ll be making more sense than him in this game.',
      btn_go_to_game:               'I have read the above; Take me to the game!',
      weird_state_note:             'If the game seems to be in a weird state, refresh the page and it should take you back to where you were. It would be helpful to take a screenshot and include it in a <a href="https://github.com/DenverCoderOne/PretendYoureXyzzy/issues/new">new bug on GitHub</a> along with a general description of the problem and the time that it happened (include a time zone please!).',
      cah_clone_note:               'Pretend You\'re Xyzzy is a Cards Against Humanity clone, which is available at <a href="http://www.cardsagainsthumanity.com/">cardsagainsthumanity.com</a>, where you can buy it or download and print it out yourself. It is distributed under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons - Attribution - Noncommercial - Share Alike license</a>. This web version is in no way endorsed or sponsored by cardsagainsthumanity.com. You may download the source code to this version from <a href="https://github.com/DenverCoderOne/PretendYoureXyzzy">GitHub</a>. For full license information, including information about included libraries, see the <a href="license.html">full license information</a>.'
    },

    he: {
      /* --- Branding / page title --- */
      page_title:                   'התחזה ל-Xyzzy',
      logo_text:                    'התחזה ל-Xyzzy',
      tagline:                      'שיבוט של <a href="http://cardsagainsthumanity.com/">קלפים נגד האנושות</a>.',

      /* --- Welcome / nickname box --- */
      nickname_label:               'כינוי:',
      optional_id_label:            'קוד זיהוי אופציונלי:',
      optional_id_title:            'זמין רק ב-HTTPS. ספק קוד זיהוי סודי לזיהוי חיובי בצ\'אט.',
      help_link:                    '(עזרה)',
      btn_set:                      'אישור',

      /* --- Privacy notice --- */
      ip_logging_notice:            'כתובת ה-IP של המחשב שלך <strong>תמיד</strong> תישמר בעת טעינת המשחק. היא לא תקושר בשום אופן לשם המשתמש שלך. תוצאות המשחק נשמרות לצמיתות, אך ללא מידע המזהה אותך.',
      privacy_important:            'חשוב באמת:',
      privacy_read:                 'קרא את דף הפרטייות לפרטים על מידע המשחק שנאסף ואיך הוא משותף.',

      /* --- Menubar buttons --- */
      btn_refresh_games:            'רענן משחקים',
      btn_create_game:              'צור משחק',
      filter_games_placeholder:     'סנן משחקים לפי מילת מפתח',
      btn_leave_game:               'עזוב משחק',
      btn_start_game:               'התחל משחק',
      btn_stop_game:                'עצור משחק',
      timer_label:                  'משך הטיימר הנוכחי:',
      timer_seconds:                'שניות',
      btn_view_cards:               'הצג קלפים',
      btn_view_cards_title:         'פתח חלון חדש לצפייה בכל הקלפים במשחק.',
      btn_logout:                   'התנתק',

      /* --- Bottom tabs --- */
      tab_preferences:              'העדפות משתמש',
      tab_gamelist_filters:         'מסנני רשימת משחקים',
      tab_global_chat:              'צ\'אט כללי',

      /* --- Preferences tab --- */
      btn_save:                     'שמור',
      btn_revert:                   'בטל שינויים',
      pref_hide_connect_quit:       'הסתר אירועי התחברות ועזיבה:',
      pref_hide_connect_quit_title: 'גם ללא סימון זה, ייתכן שלא תראה אירועים אלו אם השרת מוגדר לא לשלוח אותם.',
      pref_chat_ignore:             'רשימת התעלמות בצ\'אט, שם אחד בכל שורה:',
      pref_no_persistent_id:        'ביטול מעקב אחר משחק קלפים בין משחקים:',
      pref_no_persistent_id_title:  'גם עם אפשרות זו מסומנת, עדיין יהיה מעקב אחר הקלפים ששיחקת במשחק הנוכחי.',

      /* --- Game list filters tab --- */
      filter_refresh_note:          'יהיה עליך ללחוץ על רענן משחקים לאחר שמירת שינויים.',
      legend_card_set_filters:      'מסנני חבילות קלפים',
      filter_do_not_show:           'אל תציג משחקים עם חבילות קלפים אלו:',
      filter_do_not_show_title:     'כל משחק שמשתמש באחת מחבילות קלפים אלו לא יוצג ברשימת המשחקים.',
      filter_neutral:               'אל תדרוש ואל תחסום חבילות קלפים אלו:',
      filter_only_show:             'הצג רק משחקים עם חבילות קלפים אלו:',
      filter_only_show_title:       'כל משחק שלא משתמש בכל חבילות קלפים אלו לא יוצג ברשימה.',
      btn_remove_right:             'הסר →',
      btn_ban:                      '← חסום',
      btn_require_right:            'דרוש →',
      btn_remove_left:              '← הסר',

      /* --- Global chat tab --- */
      btn_chat:                     'שלח',
      chat_placeholder:             'הקלד כאן לצ\'אט.',

      /* --- Gamelist lobby template --- */
      lobby_game_suffix:            ' משחק',
      lobby_players_label:          'שחקנים:',
      lobby_spectators_label:       'צופים:',
      lobby_goal_label:             'יעד:',
      lobby_cards_label:            'קלפים:',
      btn_join:                     'הצטרף',
      btn_spectate:                 'צפה',

      /* --- Card templates --- */
      card_draw:                    'שלוף',
      card_pick:                    'בחר',

      /* --- Game template --- */
      btn_show_last_round:          'הצג סיבוב אחרון',
      btn_hide_game_options:        'הסתר אפשרויות משחק',
      game_animate_cards:           ' אנימציית קלפים',
      game_waiting:                 'ממתין לשרת…',
      black_card_for:               'קלף השחור עבור',
      this_round_is:                'הסיבוב הזה הוא',
      white_cards_played:           'קלפי הלבן שהושקו בסיבוב זה:',
      prev_round_won_by:            'הסיבוב הקודם נוצח על ידי ',
      your_hand:                    'היד שלך',
      btn_confirm_selection:        'אשר בחירה',

      /* --- Scoreboard --- */
      scoreboard_title:             'לוח תוצאות',
      awesome_point_title:          'נקודה מדהימה',
      awesome_point_plural:         '',
      /* --- Game chat tab --- */
      chat_with_game_members:       'שוחח עם חברי המשחק',
      /* --- Previous round template --- */
      btn_close:                    'סגור',
      round_winner_label:           'מנצח הסיבוב: ',

      /* --- Game options template --- */
      options_host_only:            'רק מארח המשחק יכול לשנות אפשרויות.',
      legend_game_options:          'אפשרויות משחק:',
      score_limit_label:            'מגבלת ניקוד:',
      player_limit_label:           'מגבלת שחקנים:',
      player_limit_note:            'יותר מ-10 שחקנים עלול לגרום לצפיפות!',
      spectator_limit_label:        'מגבלת צופים:',
      spectator_note:               'צופים יכולים לצפות ולשוחח, אך לא לשחק. אפילו לא כפוסק.',
      timer_multiplier_label:       'מכפיל טיימר חוסר פעילות:',
      timer_unlimited:              'ללא הגבלה',
      legend_card_sets:             'חבילות קלפים',
      legend_custom_card_sets:      'חבילות קלפים מותאמות',
      btn_upload_json:              'העלה JSON',
      btn_download_url:             'הורד מ-URL',
      btn_remove_selected:          'הסר נבחרים',
      blank_cards_include:          'כלל גם',
      blank_cards_suffix:           'קלפי לבן ריקים.',
      game_password_label:          'סיסמת משחק:',
      password_apply_note:          'עליך ללחוץ מחוץ לתיבה להחיל את הסיסמה.',
      btn_hide_password:            'הסתר סיסמה.',

      /* --- Lang toggle --- */
      lang_toggle_btn:              'English',

      /* --- index.jsp specific --- */
      pretend_youre:                'התחזה ל',
      xyzzy_dfn_title:              'קסיזי הוא בוט בינה מלאכותית עליולתי. תהיה הגיוני יותר ממנו.',
      btn_go_to_game:               'קראתי את הנדרש; קח אותי למשחק!',
      weird_state_note:             'אם המשחק נראה במצב מוזר, רענן את הדף ותחזור למקום שבו היית. יהיה מועיל לצלם צילום מסך ולצרף אותו ל<a href="https://github.com/DenverCoderOne/PretendYoureXyzzy/issues/new">באג חדש ב-GitHub</a> יחד עם תיאור כללי של הבעיה ושעת האירוע (בבקשה כלול אזור זמן!).',
      cah_clone_note:               'Pretend You\'re Xyzzy הוא שיבוט של Cards Against Humanity, הזמין ב-<a href="http://www.cardsagainsthumanity.com/">cardsagainsthumanity.com</a>, שם אפשר לקנות אותו או להוריד ולהדפיס בעצמך. הוא מופץ תחת רישיון <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons - ייחוס - לא מסחרי - שיתוף זהה</a>. גרסת האינטרנט הזו אינה מאושרת או ממומנת בשום אופן על ידי cardsagainsthumanity.com. ניתן להוריד את קוד המקור לגרסה זו מ-<a href="https://github.com/DenverCoderOne/PretendYoureXyzzy">GitHub</a>. למידע מלא על רישיונות, כולל מידע על ספריות נכללות, ראה את <a href="license.html">מידע הרישיון המלא</a>.'
    }
  };

  /* ------------------------------------------------------------------ */
  /* Module                                                               */
  /* ------------------------------------------------------------------ */
  var I18n = {
    currentLang: 'en',

    /** Read saved cookie and apply the stored language (or default to English). */
    init: function () {
      var urlParam = new URLSearchParams(window.location.search).get('lang');
      var saved    = (typeof $.cookie === 'function') ? $.cookie(COOKIE_KEY) : null;
      var lang     = urlParam || saved;
      this.apply(lang === 'he' ? 'he' : 'en');
    },

    /** Flip between English and Hebrew. */
    toggle: function () {
      this.apply(this.currentLang === 'en' ? 'he' : 'en');
    },

    /** Look up a translation key in the current language. */
    t: function (key) {
      var t = translations[this.currentLang] || translations.en;
      return (t[key] !== undefined) ? t[key] : (translations.en[key] || key);
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

      /* Override GamePlayerStatus constants for dynamically-set status strings */
      if (window.cah && cah.$ && cah.$.GamePlayerStatus_msg) {
        var statusMsg = {
          en: { sjj: 'Selecting',   sv: 'Spectator', sw: 'Winner!',  sh: 'Host',   si: '',       sj: 'Card Czar', sp: 'Playing' },
          he: { sjj: 'בוחר',        sv: 'צופה',       sw: '!מנצח',   sh: 'מארח',   si: '',       sj: 'פוסק',        sp: 'משחק' }
        };
        var statusMsg2 = {
          en: { sjj: 'Select a winning card.',  sv: 'You are just spectating.',          sw: 'You have won!',
                sh: 'Wait for players then click Start Game.',                            si: 'Waiting for players...',
                sj: 'You are the Card Czar.',   sp: 'Select a card to play.' },
          he: { sjj: '.בחר קלף מנצח',           sv: '.אתה רק צופה',                      sw: '!ניצחת',
                sh: '.המתן לשחקנים ולאחר מכן לחץ על התחל משחק',                          si: '...ממתין לשחקנים',
                sj: '.אתה הפוסק',                sp: '.בחר קלף לשחק' }
        };
        var sm  = statusMsg[lang]  || statusMsg.en;
        var sm2 = statusMsg2[lang] || statusMsg2.en;
        for (var k in sm)  { if (Object.prototype.hasOwnProperty.call(sm,  k)) { cah.$.GamePlayerStatus_msg[k]   = sm[k];  } }
        for (var k in sm2) { if (Object.prototype.hasOwnProperty.call(sm2, k)) { cah.$.GamePlayerStatus_msg_2[k] = sm2[k]; } }
      }

      /* Update all the toggle buttons labels to name the *other* language */
      $('.lang_toggle').each(function () {
        $(this).text(t.lang_toggle_btn);
      });

      /* Update dynamically-created game chat tab label */
      if (t.chat_with_game_members) {
        $('.game_chat_tab_label').text(t.chat_with_game_members);
      }
    }
  };

  cah.I18n = I18n;

})(window.cah = window.cah || {});
