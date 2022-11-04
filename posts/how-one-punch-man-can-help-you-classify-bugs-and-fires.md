---
title: 'How One Punch Man can help you classify bugs and fires!'
date: '2022-11-03'
categories: []
banner: '/images/posts/threat-levels.png'
image: '/images/posts/threat-levels.png'
excerpt: "How the fictional threat level classification system can help you prioritize bugs!"
---

## Table of Contents

## Intro

The hit webcomic-turned-manga-turned-anime series One Punch Man, home of the titular One Punch Man, AKA Saitama, AKA Caped Baldy is parody of many traditinal shonen manga series. Instead of the traditional hero training hard to overcome each new and increased challenge, one step at a time, we have a hero who insteads has already undergone all that training to a point of attaining god-like powers, thus being able to defeat each and any oponnent in a single punch.

While that sounds like a boring premise, the focus of the show is not on wheather or not Saitama will be able to overcome each oponent. It is about the struggles he faces with his inner self, facing depression and extreme isolation from everything and everyone. It is a great show, truly.

If you are interested in the show, give it a go, you won't regret. However, we are not here to talk about manga. At least, not any further.

We are here to talk about bugs, not the fly with which saitama has an epic battle, but bugs in our code.

## Defining threat levels

In One Punch Man, the world of super heroes is organized by a national hero organization. While heroes can be great on their own, under the organization they can be much more effective.

The main way this organization helps them save the world more effectively is one we can all take lessons from:

Step 1: Identify the threat
Step 2: Identify the threat level
Step 3: Dispatch the apropriate hero/heroes for the job

The first step is usually done by an user reporting a bug or an automated system detecting one. Pretty straight forward.

I would like to focus this write-up on the second step.

In OPM they have this very interesting and intuitive way to classify threats, by assigning them codenames that are very intuitive. Which are:

- **WOLF**: Puts in danger the life of an individual
- **TIGER**: Puts in danger the life of many individuals
- **ONI**: Puts in danger the life of a large group of individuals (like a whole city)
- **DRAGON**: Puts in danger the life of many cities (or a whole country)
- **GOD**: Puts all of humanity in check. Can wipe out the planet.

## Converting these to something within our reality

While we are not likely to face giant monsters called "Vaccine Man" trying to wipe out the virus that is humanity from the planet, as engineers we are very likely to face bugs that threaten to make us lose an user. Or many. Or all.

So let's convert those meanings to something we can use. And also add a lower level one.

- **BABY**: Not a threat. Just an inconvenience.
- **WOLF**: A bug that affects a single user. Has unknown potential to make us lose more users.
- **TIGER**: A bug that affects many users. Example: a bug that affects accounts created on February 29.
- **ONI**: A bug that affects a whole user group. Example: a bug that affects accounts with the "accounting" role.
- **DRAGON**: A bug that affects a many user groups. Example: a bug that affects all users in a determined timezone.
- **GOD**: A bug that affects everyone. It can potentially make us lose all our users. Example: you broke the login page.

## Prioritizing and dispatching personel.

Once the threat level has been identified, all that's left to do is prioritize what to tackle first.

Obviously, Oni and above must be tacled ASAP! All hands on deck. Stop whatever you are doing and fix it!

Wolf and Tigers can be dealt with in a high priority ticket. Whenever a dev is available they can tackle it.

Baby tickets can obviously be solved with a low priority ticket, or, if available, with some workaround.

When it comes to dispatching the apropriate people to deal with the issue, I would probably do the following:

- Baby: whoever gets to it when tackling issues following their priority value.
- Wolf & Tiger: Can also be solved by anyone. Wolves are also probably great initial issues for people new in the team.
- Oni & Dragon: Dispatch your S class heroes. Probably a good idea to dispatch the most experienced developers for this one.
- God: Hopefully we will never have to face one of these. But if we do, it's probably a team effort issue. Get a task-force together and figure out the best solution. May god have mercy on your soul.

## Conclusion

This is obviously not a very serious ~~punch~~ post. You don't have to prioritize your issues with goofy anime based names (even though this list of threat levels rule IMO). The main takeaway here is the following:

Identifying how many users can we potentially lose (or at the very least annoy) if we leave this bug in is an extremely valuable metric, that is fairly easy to assess, when defining issue prioritization.

At the end of the day, our time and numbers are limited, and we gotta make the best use out of them.