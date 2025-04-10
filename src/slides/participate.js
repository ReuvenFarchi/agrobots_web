import colors from "@/assets/colors.js";

export default {
    name: 'participate',
    title: 'Get Involved',
    component: 'ActionColumns',
    content: {
        general:
            {
                slideTitle: 'Participate',
                slideTitleColor: colors.primary,
                slideIntro: 'Help us bring regenerative, autonomous agriculture to life. We\'re launching soon on Kickstarter and inviting early supporters to join us.',
                slideIntroColor: colors.secondary,
            },
        columns: [
            {
                columnIcon: "🚀",
                columnTitle: "Back us on Kickstarter",
                columnText: "Join our early supporters by backing our pilot deployments on Kickstarter. Your support makes our regenerative, autonomous agriculture a reality. Become part of the movement that’s redefining farming and enjoy exclusive updates as we grow together.",
                buttonText: "Support the Campaign",
                buttonLink: "https://kickstarter.com",
                buttonBgColor: colors.accent,
                buttonTextColor: colors.textDark,
                buttonBorderColor: colors.accent,
                columnsBgColor: colors.backgroundDark,
                textColor: colors.primary,
                borderColor: colors.primary,
            },
            {
                columnIcon: "📣",
                columnTitle: "Spread the word",
                columnText: "Help us amplify our mission by sharing our story with friends, family, and anyone passionate about sustainable technology. Your voice can spark change and raise awareness about a future where agriculture and nature work in harmony.",
                buttonText: "Share with Friends",
                buttonLink: "share",
                buttonBgColor: colors.accent,
                buttonTextColor: colors.textDark,
                buttonBorderColor: colors.accent,
                columnsBgColor: colors.backgroundDark,
                textColor: colors.primary,
                borderColor: colors.primary,

            },
            {
                columnIcon: "🤝",
                columnTitle: "Partner with us",
                columnText: "We’re eager to collaborate with investors, local collaborators, OEM suppliers, and policy allies. Let’s work together to build a resilient, sustainable agricultural ecosystem that benefits everyone involved.",
                buttonText: "Talk to Us",
                buttonLink: "contact",
                buttonBgColor: colors.accent,
                buttonTextColor: colors.textDark,
                buttonBorderColor: colors.accent,
                columnsBgColor: colors.backgroundDark,
                textColor: colors.primary,
                borderColor: colors.primary,
            },
        ]
    }
};