<?xml version="1.0" encoding="UTF-8" ?>
<%--
Copyright (c) 2012-2018, Andy Janata
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
Index page. This is currently entirely static HTML, but may eventually require some server-side code
to, for instance, display the number of connected players.

@author Andy Janata (ajanata@socialgamer.net)
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Pretend You're Xyzzy</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=DM+Serif+Display&display=swap"/>
    <jsp:include page="analytics.jsp"/>
    <link rel="stylesheet" type="text/css" href="cah.css" media="screen"/>
    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/cah.i18n.js"></script>
</head>
<body>
<button class="lang_toggle" onclick="cah.I18n.toggle()" title="Switch language / החלף שפה">עברית</button>
<h1>
    <span data-i18n="pretend_youre">Pretend You're</span> <dfn style="border-bottom: 1px dotted black"
                        title="Xyzzy is an Artificial Unintelligence bot. You'll be making more sense than him in this game."
                        data-i18n-title="xyzzy_dfn_title">
    Xyzzy</dfn>
</h1>
<h3 data-i18n-html="tagline">A Cards Against Humanity clone.</h3>
<p data-i18n-html="ip_logging_notice">
  Your computer's IP address will <strong>always</strong> be logged when you load the game client.
  It is not tied in any way to your username, except possibly if a server error occurs. Gameplay
  results are logged permanently, but without information identifying you.
</p>
<p data-i18n-html="weird_state_note">
    If the game seems to be in a weird state, refresh the page and it should take you back to where
    you were. It would be helpful to take a screenshot and include it in a
    <a href="https://github.com/DenverCoderOne/PretendYoureXyzzy/issues/new">new bug on GitHub</a> along with
    a general description of the problem and the time that it happened (include a time zone please!).
</p>
<p>
    <input type="button" value="I have read the above; Take me to the game!"
           data-i18n-value="btn_go_to_game"
           onclick="window.location='game.jsp';"/>
</p>
<p data-i18n-html="cah_clone_note">
    Pretend You're Xyzzy is a Cards Against Humanity clone, which is available at
    <a href="http://www.cardsagainsthumanity.com/">cardsagainsthumanity.com</a>, where you can buy it
    or download and print it out yourself. It is distributed under a
    <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons - Attribution -
        Noncommercial - Share Alike license</a>. This web version is in no way endorsed or sponsored by
    cardsagainsthumanity.com. You may download the source code to this version from
    <a href="https://github.com/DenverCoderOne/PretendYoureXyzzy">GitHub</a>. For full license
    information, including information about included libraries, see the
    <a href="license.html">full license information</a>.
</p>
<script type="text/javascript">
  $(document).ready(function() { cah.I18n.init(); });
</script>
</body>
</html>
