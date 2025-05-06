import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { useTranslation, setLocale } from 'final-i18n';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Switch, SwitchChangeEvent } from 'react-native';
import { ParallaxScrollView } from '@/components/ui/scroll/ParallaxScrollView';
import { ThemedText } from '@/components/ui/themed/ThemedText';
import { ThemedView } from '@/components/ui/themed/ThemedView';
import { HelloWave } from './HelloWave';
import { translations } from './Home.i18n';

export function Home() {
	const { t, locale } = useTranslation(translations);
	const navigation = useNavigation();
	const [enabled, setEnabled] = useState(locale === 'ja');

	const handleChangeLocale = useCallback((event: SwitchChangeEvent) => {
		setEnabled(event.nativeEvent.value);
		if (event.nativeEvent.value) {
			setLocale('ja');
		} else {
			setLocale('en');
		}
	}, []);

	useEffect(() => {
		// Tabs の screenOptions 関数の実行をトリガーするために必要
		navigation.setOptions({});
	}, [navigation, t]);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#a1cedc', dark: '#1d3d47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">{t('title')}</ThemedText>
				<HelloWave />
			</ThemedView>
			<ThemedView style={styles.titleContainer}>
				<Switch value={enabled} onChange={handleChangeLocale} />
				<ThemedText>{t('japanese')}</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">
					{t('subtitle.step1', {
						markA: <ThemedText style={{ fontSize: 50 }}>🚀</ThemedText>,
						markB: <ThemedText style={{ fontSize: 50 }}>✨</ThemedText>,
					})}
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
